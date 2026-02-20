import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';

import {
  MenuItem,
  MenuCategory,
  MenuItemTag,
} from '@core/models/menu-item.model';

// Module-level lookups — instantiated once, not on every computed call.
const CATEGORY_LABELS: Record<MenuCategory, string> = {
  coffee: 'Coffee',
  tea:    'Tea',
  pastry: 'Pastry',
  food:   'Food',
};

const TAG_LABELS: Record<MenuItemTag, string> = {
  popular:  'Popular',
  seasonal: 'Seasonal',
  new:      'New',
};

/**
 * MenuItemCardComponent — dumb leaf component.
 *
 * Receives a single MenuItem via a required signal input and renders it.
 * No routing, no services, no side effects.
 *
 * Computed signals keep all display-logic out of the template:
 *   - formattedPrice: formats the raw number to "€3.20"
 *   - categoryLabel:  maps the MenuCategory union value to a display string
 *   - tagLabel:       maps MenuItemTag to a display string, or null if no tag
 *
 * OnPush: only re-renders when the parent signal passes a new item reference.
 */
@Component({
  selector: 'app-menu-item-card',
  templateUrl: './menu-item-card.html',
  styleUrl: './menu-item-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuItemCardComponent {
  readonly item = input.required<MenuItem>();

  protected readonly formattedPrice = computed((): string =>
    `€${this.item().price.toFixed(2)}`,
  );

  protected readonly categoryLabel = computed((): string =>
    CATEGORY_LABELS[this.item().category],
  );

  /** Null when no tag is set — used for `@if` in the template. */
  protected readonly tagLabel = computed((): string | null => {
    const tag = this.item().tag;
    return tag ? TAG_LABELS[tag] : null;
  });
}
