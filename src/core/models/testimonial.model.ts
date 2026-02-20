/**
 * Testimonial domain model.
 */
export interface Testimonial {
  readonly id: string;
  readonly author: string;
  readonly location: string;
  readonly quote: string;
  readonly rating: 1 | 2 | 3 | 4 | 5;
}
