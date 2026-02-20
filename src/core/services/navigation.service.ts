import { computed, inject, Injectable, signal } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { filter } from 'rxjs/operators';

import { NavConfig } from '@core/models/navigation.model';

/**
 * NavigationService — singleton, provided in root.
 *
 * Responsibilities:
 *  - Owns the static nav configuration (brand, links)
 *  - Tracks the current active URL via a signal
 *  - Exposes isActive() helper consumed by NavbarComponent
 *
 * No business logic in components — they read from this service.
 */
@Injectable({ providedIn: 'root' })
export class NavigationService {
  private readonly router = inject(Router);

  readonly navConfig: NavConfig = {
    brand: 'Maison Noir',
    tagline: 'Artisan Coffee & Provisions',
    links: [
      { label: 'Home',    path: '/',        ariaLabel: 'Go to home page'    },
      { label: 'Menu',    path: '/menu',    ariaLabel: 'View our menu'      },
      { label: 'About',   path: '/about',   ariaLabel: 'About Maison Noir'  },
      { label: 'Contact', path: '/contact', ariaLabel: 'Get in touch'       },
    ],
  };

  private readonly _currentUrl = signal<string>('/');

  /** Read-only computed view of the current URL */
  readonly currentUrl = computed(() => this._currentUrl());

  constructor() {
    // Update signal on every completed navigation
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      takeUntilDestroyed(),
    ).subscribe((event) => {
      this._currentUrl.set(event.urlAfterRedirects);
    });
  }

  isActive(path: string): boolean {
    const current = this._currentUrl();
    return path === '/' ? current === '/' : current.startsWith(path);
  }
}
