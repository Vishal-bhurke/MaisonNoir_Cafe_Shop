import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

import { MenuItem, MenuItemTag } from '@core/models/menu-item.model';

/**
 * MenuCardComponent — dumb leaf component.
 *
 * Receives a single MenuItem via signal input and renders it.
 * No routing, no services, no side effects.
 *
 * Price is formatted as a computed signal to keep template logic-free.
 * Tag label/class mapping is a computed signal for strict-typing and testability.
 */
@Component({
  selector: 'app-menu-card',
  templateUrl: './menu-card.html',
  styleUrl: './menu-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuCardComponent {
  readonly item = input.required<MenuItem>();

  protected readonly formattedPrice = computed((): string => {
    return `€${this.item().price.toFixed(2)}`;
  });

  protected readonly tagLabel = computed((): string => {
    const map: Record<MenuItemTag, string> = {
      popular:  'Popular',
      seasonal: 'Seasonal',
      new:      'New',
    };
    const tag = this.item().tag;
    return tag ? map[tag] : '';
  });
}
