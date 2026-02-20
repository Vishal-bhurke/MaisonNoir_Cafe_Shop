import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

/**
 * HeroComponent — full-viewport opening section.
 *
 * Fully static presentation component — no inputs, no state.
 * Entrance animation is pure CSS (keyframes on page load), not IntersectionObserver,
 * because this section is always above the fold.
 *
 * OnPush: never re-renders after initial paint.
 */
@Component({
  selector: 'app-hero',
  imports: [RouterLink],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {}
