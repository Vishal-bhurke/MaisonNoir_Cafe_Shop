import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { MenuItem } from '@core/models/menu-item.model';
import { MenuCardComponent } from './menu-card/menu-card';
import { RevealDirective } from '@shared/directives/reveal-on-scroll.directive';

/**
 * MenuPreviewComponent — featured items teaser on home page.
 *
 * Owns the curated selection of 3 featured items shown on the home page.
 * Data is a compile-time constant — no service needed until a backend exists.
 * When a MenuService is introduced in a later step, only this component changes.
 *
 * Smart child: manages its own data.
 * MenuCardComponent is the dumb leaf that renders each item.
 */
@Component({
  selector: 'app-menu-preview',
  imports: [RouterLink, MenuCardComponent, RevealDirective],
  templateUrl: './menu-preview.html',
  styleUrl: './menu-preview.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuPreviewComponent {
  protected readonly featuredItems: ReadonlyArray<MenuItem> = [
    {
      id: 'espresso-classico',
      name: 'Espresso Classico',
      description:
        'Our house blend pulled at 9 bars. Intense, velvety, with a hazelnut finish.',
      price: 3.5,
      category: 'coffee',
      tag: 'popular',
      imageAlt: 'A double espresso in a handmade ceramic cup on a marble surface',
    },
    {
      id: 'single-origin-pour-over',
      name: 'Single Origin Pour Over',
      description:
        'Ethiopian Yirgacheffe — floral, bright, and served black. Brewed to order.',
      price: 5.0,
      category: 'coffee',
      tag: 'seasonal',
      imageAlt: 'Pour over coffee being brewed through a glass dripper',
    },
    {
      id: 'cortado',
      name: 'Cortado',
      description:
        'Equal parts espresso and gently steamed milk. Balance in a small glass.',
      price: 4.0,
      category: 'coffee',
      imageAlt: 'A cortado in a small clear glass on a wooden tray',
    },
  ];
}
