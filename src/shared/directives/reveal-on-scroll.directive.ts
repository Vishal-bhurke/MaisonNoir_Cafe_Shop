import { DestroyRef, Directive, ElementRef, inject, input, OnInit } from '@angular/core';

/**
 * RevealOnScrollDirective — [appReveal]
 *
 * Adds the global `.reveal` class to the host element and uses IntersectionObserver
 * to append `.reveal--visible` when the element enters the viewport, triggering the
 * CSS entrance transition defined in `_base.scss`.
 *
 * Usage:
 *   <app-section appReveal />
 *   <app-section appReveal [delay]="200" />
 *
 * Architecture:
 *   - Single IntersectionObserver per element (unobserved after first intersection).
 *   - Delay injected as `--reveal-delay` CSS custom property so the transition-delay
 *     is handled entirely in CSS — no setTimeout or zone-triggering timers.
 *   - DestroyRef cleans up the observer if the component is destroyed before firing.
 *   - Gracefully skips if IntersectionObserver is unavailable (SSR/legacy).
 */
@Directive({
  selector: '[appReveal]',
  standalone: true,
  host: {
    class: 'reveal',
    '[style.--reveal-delay]': 'delayMs',
  },
})
export class RevealDirective implements OnInit {
  private readonly el = inject(ElementRef<HTMLElement>);
  private readonly destroyRef = inject(DestroyRef);

  /** Delay in milliseconds before the reveal transition starts. Default: 0. */
  readonly delay = input<number>(0);

  protected get delayMs(): string {
    return `${this.delay()}ms`;
  }

  ngOnInit(): void {
    if (typeof IntersectionObserver === 'undefined') {
      this.el.nativeElement.classList.add('reveal--visible');
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal--visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -64px 0px' },
    );

    observer.observe(this.el.nativeElement);
    this.destroyRef.onDestroy(() => observer.disconnect());
  }
}
