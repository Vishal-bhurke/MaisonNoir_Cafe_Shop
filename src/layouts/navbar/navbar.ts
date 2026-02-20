import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  signal,
} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { NavigationService } from '@core/services/navigation.service';
import { ScrollService } from '@core/services/scroll.service';

/**
 * NavbarComponent — sticky top navigation bar.
 *
 * Change detection: OnPush.
 *   - isScrolled and isMenuOpen are signals → Angular tracks them automatically.
 *   - No zone.js involvement; markForCheck() never required.
 *
 * Scroll behavior:
 *   - Transparent at page-top (overlays hero).
 *   - Transitions to bg-inverse with shadow after 80 px scroll.
 *   - Subscription scoped via takeUntilDestroyed() — no ngOnDestroy needed.
 *
 * Mobile menu:
 *   - Toggle state held in isMenuOpen signal.
 *   - ESC key closes the panel and returns focus to the hamburger button.
 *   - Panel uses [attr.inert] when closed — removes it from the tab order
 *     and the accessibility tree (WCAG 2.1 SC 2.1.1).
 *   - CSS max-height + stagger animation; no JS layout measurement needed.
 *   - The host class `navbar-host--menu-open` reflects state onto :host so
 *     the SCSS hamburger→X animation can target `.navbar__toggle-bar` spans
 *     without needing Angular to enter them individually.
 */
@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    // Reflect open state on :host — lets SCSS drive hamburger→X animation
    '[class.navbar-host--menu-open]': 'isMenuOpen()',
    // ESC listener at document level catches ESC even from within menu items
    '(document:keydown.escape)': 'onEscapeKey()',
  },
})
export class NavbarComponent {
  protected readonly navService = inject(NavigationService);
  private readonly scrollService = inject(ScrollService);
  private readonly el = inject(ElementRef<HTMLElement>);

  protected readonly isScrolled = signal(false);
  protected readonly isMenuOpen = signal(false);

  constructor() {
    this.scrollService.scrolledPastNav$.pipe(
      takeUntilDestroyed(),
    ).subscribe((scrolled) => this.isScrolled.set(scrolled));
  }

  protected toggleMenu(): void {
    this.isMenuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.isMenuOpen.set(false);
  }

  /**
   * Closes the mobile menu on ESC and returns focus to the hamburger button
   * so keyboard users don't lose their location in the document.
   */
  protected onEscapeKey(): void {
    if (!this.isMenuOpen()) return;
    this.closeMenu();
    const toggle = this.el.nativeElement.querySelector('.navbar__toggle') as HTMLButtonElement | null;
    toggle?.focus();
  }
}
