import { ChangeDetectionStrategy, Component } from '@angular/core';

import { HeroComponent } from './components/hero/hero';
import { AboutPreviewComponent } from './components/about-preview/about-preview';
import { MenuPreviewComponent } from './components/menu-preview/menu-preview';
import { TestimonialsComponent } from './components/testimonials/testimonials';
import { CtaSectionComponent } from './components/cta-section/cta-section';
import { RevealDirective } from '@shared/directives/reveal-on-scroll.directive';

/**
 * HomeComponent — smart page-level container.
 *
 * Pure composition shell: imports and sequences all five home sections.
 * Applies RevealDirective to below-fold sections for scroll-entrance animation.
 * No business logic or data — each section component is self-contained.
 *
 * Route title is set declaratively in app.routes.ts.
 * OnPush: no local state; re-render is driven by router navigation only.
 */
@Component({
  selector: 'app-home',
  imports: [
    HeroComponent,
    AboutPreviewComponent,
    MenuPreviewComponent,
    TestimonialsComponent,
    CtaSectionComponent,
    RevealDirective,
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
