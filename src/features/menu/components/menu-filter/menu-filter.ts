import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

import { FilterCategory, MenuCategory } from '@core/models/menu-item.model';

/**
 * MenuFilterComponent — dumb filter pill bar.
 *
 * Receives:
 *   - categories: pill data (label + count) produced by the parent's computed signal.
 *   - active: currently selected category value.
 *
 * Emits:
 *   - filterChange: the new category value when a pill is clicked.
 *
 * No internal state — the parent (MenuComponent) is the single source of truth.
 * OnPush: re-renders only when input signal references change.
 */
@Component({
  selector: 'app-menu-filter',
  templateUrl: './menu-filter.html',
  styleUrl: './menu-filter.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuFilterComponent {
  readonly categories = input.required<ReadonlyArray<FilterCategory>>();
  readonly active     = input<MenuCategory | 'all'>('all');

  /** Emits the selected category value to the parent. */
  readonly filterChange = output<MenuCategory | 'all'>();

  protected onSelect(value: MenuCategory | 'all'): void {
    this.filterChange.emit(value);
  }
}
