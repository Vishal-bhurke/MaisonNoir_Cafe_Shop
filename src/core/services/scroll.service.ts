import { inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { distinctUntilChanged, fromEvent, map, Observable, share } from 'rxjs';

/**
 * ScrollService — singleton, provided in root.
 *
 * Exposes a shared Observable<boolean> that emits `true` once the user
 * has scrolled past the navbar-collapse threshold (80px).
 *
 * Using `share()` ensures a single event listener regardless of how many
 * components subscribe (e.g. future sticky sidebar + navbar simultaneously).
 *
 * Architecture note:
 *   - This service intentionally does NOT hold Angular signals. The scroll
 *     event fires at 60fps — converting to a signal inside NavbarComponent
 *     (via takeUntilDestroyed) keeps the subscription lifecycle scoped to
 *     the component and avoids memory leaks on dynamic mount/unmount.
 */
@Injectable({ providedIn: 'root' })
export class ScrollService {
  private readonly document = inject(DOCUMENT);
  private readonly window = this.document.defaultView as Window;

  /** Emits true when scrollY > 80, false when <= 80. Multicasts to all consumers. */
  readonly scrolledPastNav$: Observable<boolean> = fromEvent(this.window, 'scroll').pipe(
    map(() => this.window.scrollY > 80),
    distinctUntilChanged(),
    share(),
  );
}
