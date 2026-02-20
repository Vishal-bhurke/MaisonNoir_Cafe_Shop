import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal,
} from '@angular/core';

import { MenuService } from '@core/services/menu.service';
import { FilterCategory, MenuCategory } from '@core/models/menu-item.model';
import { RevealDirective } from '@shared/directives/reveal-on-scroll.directive';
import { MenuFilterComponent } from './components/menu-filter/menu-filter';
import { MenuItemCardComponent } from './components/menu-item-card/menu-item-card';

// Module-level map — avoids instantiating a Record on every computed evaluation.
const CATEGORY_LABELS: Record<MenuCategory, string> = {
  coffee: 'Coffee',
  tea:    'Tea',
  pastry: 'Pastry',
  food:   'Food',
};

/**
 * MenuComponent — full menu page.
 *
 * Smart parent: owns all reactive state and delegates rendering to
 * dumb child components (MenuFilterComponent, MenuItemCardComponent).
 *
 * Signal graph:
 *   activeCategory (signal)
 *     └─ filteredItems  (computed) — items matching the active category
 *     └─ filterCategories (computed) — pill data with item counts
 *
 * Change detection: OnPush.
 *   Angular only checks this component when a signal it reads changes.
 *   No subscriptions, no zone triggers, no manual markForCheck().
 */
@Component({
  selector: 'app-menu',
  imports: [RevealDirective, MenuFilterComponent, MenuItemCardComponent],
  templateUrl: './menu.html',
  styleUrl: './menu.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent {
  private readonly menuService = inject(MenuService);

  /** Currently active filter. 'all' means no category restriction. */
  protected readonly activeCategory = signal<MenuCategory | 'all'>('all');

  /** Items visible under the current filter. Re-evaluated by Angular's signal graph. */
  protected readonly filteredItems = computed(() =>
    this.menuService.getByCategory(this.activeCategory()),
  );

  /**
   * Filter pill data for MenuFilterComponent.
   * Each entry carries the item count so the UI stays accurate without an
   * extra service call — the count is derived from the same static array.
   */
  protected readonly filterCategories = computed((): ReadonlyArray<FilterCategory> => {
    const uniqueCats = this.menuService.getUniqueCategories();
    return [
      { value: 'all', label: 'All Items', count: this.menuService.items.length },
      ...uniqueCats.map((cat) => ({
        value: cat,
        label: CATEGORY_LABELS[cat],
        count: this.menuService.items.filter((i) => i.category === cat).length,
      })),
    ];
  });

  /** Called by MenuFilterComponent via (filterChange) output. */
  protected onCategoryChange(category: MenuCategory | 'all'): void {
    this.activeCategory.set(category);
  }
}
