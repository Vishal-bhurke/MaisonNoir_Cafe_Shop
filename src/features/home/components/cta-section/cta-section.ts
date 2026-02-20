import { ChangeDetectionStrategy, Component } from '@angular/core';

import { RevealDirective } from '@shared/directives/reveal-on-scroll.directive';

/**
 * CtaSectionComponent — final page conversion block.
 *
 * Static presentation. No inputs. No state.
 * External link to Google Maps opens in a new tab — noopener applied.
 * OnPush: will never trigger change detection after initial render.
 */
@Component({
  selector: 'app-cta-section',
  imports: [RevealDirective],
  templateUrl: './cta-section.html',
  styleUrl: './cta-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CtaSectionComponent {}
