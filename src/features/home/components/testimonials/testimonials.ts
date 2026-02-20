import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Testimonial } from '@core/models/testimonial.model';
import { TestimonialCardComponent } from './testimonial-card/testimonial-card';
import { RevealDirective } from '@shared/directives/reveal-on-scroll.directive';

/**
 * TestimonialsComponent — social proof section.
 *
 * Smart child: owns its curated testimonials data.
 * TestimonialCardComponent is the dumb leaf renderer.
 *
 * Rating is typed as a union 1|2|3|4|5 — no arbitrary integers.
 */
@Component({
  selector: 'app-testimonials',
  imports: [TestimonialCardComponent, RevealDirective],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestimonialsComponent {
  protected readonly testimonials: ReadonlyArray<Testimonial> = [
    {
      id: 't1',
      author: 'Sophie Martin',
      location: 'Paris, France',
      quote:
        'The best cortado I have had outside of Madrid. The space itself feels like it was designed for slow mornings and honest conversation.',
      rating: 5,
    },
    {
      id: 't2',
      author: 'James Okafor',
      location: 'London, UK',
      quote:
        'Their pour-over selection is extraordinary. The staff knows their beans — you can feel the passion in every cup they serve.',
      rating: 5,
    },
    {
      id: 't3',
      author: 'Léa Dumont',
      location: 'Local regular',
      quote:
        'It has become my weekly ritual. I come for the coffee and I stay for the quiet. There is no other place quite like it.',
      rating: 5,
    },
  ];
}
