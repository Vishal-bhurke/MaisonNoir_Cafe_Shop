import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { RevealDirective } from '@shared/directives/reveal-on-scroll.directive';

/**
 * AboutPreviewComponent — brand story teaser.
 *
 * Dumb presentation component. Static content only.
 * Internal elements use RevealDirective with staggered delays
 * for a sequenced left-to-right reveal when the section scrolls into view.
 */
@Component({
  selector: 'app-about-preview',
  imports: [RouterLink, RevealDirective],
  templateUrl: './about-preview.html',
  styleUrl: './about-preview.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutPreviewComponent {}
