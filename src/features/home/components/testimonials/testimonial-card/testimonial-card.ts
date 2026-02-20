import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

import { Testimonial } from '@core/models/testimonial.model';

/**
 * TestimonialCardComponent — dumb leaf component.
 *
 * Receives a single Testimonial via signal input.
 * Star array is a computed signal — derives from rating once, cached by Angular.
 * Accessible: star rating exposed as an aria-label on the container span.
 */
@Component({
  selector: 'app-testimonial-card',
  templateUrl: './testimonial-card.html',
  styleUrl: './testimonial-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestimonialCardComponent {
  readonly testimonial = input.required<Testimonial>();

  /** Array of booleans — true = filled star, false = empty. Length always 5. */
  protected readonly stars = computed((): ReadonlyArray<boolean> =>
    Array.from({ length: 5 }, (_, i) => i < this.testimonial().rating),
  );

  protected readonly ratingLabel = computed(
    (): string => `Rated ${this.testimonial().rating} out of 5 stars`,
  );
}
