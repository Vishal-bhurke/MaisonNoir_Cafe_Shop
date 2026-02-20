/**
 * MenuItem domain models.
 * Shared between HomeFeature (preview) and MenuFeature (full listing).
 *
 * Categories are intentionally broad (coffee / tea / pastry / food) so the
 * filter bar on the menu page stays at 4 + "All" = 5 legible buttons.
 * Sub-categories (espresso, pour-over, etc.) live in `description` / `origin`.
 */

export type MenuCategory = 'coffee' | 'tea' | 'pastry' | 'food';

export type MenuItemTag = 'popular' | 'seasonal' | 'new';

export interface MenuItem {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly price: number;
  readonly category: MenuCategory;
  /** Provenance or preparation note — e.g. "Ethiopia / Colombia", "Baked in-house". */
  readonly origin?: string;
  /** Optional single badge shown on the card. */
  readonly tag?: MenuItemTag;
  readonly imageAlt: string;
  /** Path relative to /public — e.g. "/images/item-espresso.jpg". Omit for items without a dedicated photo. */
  readonly imageUrl?: string;
}

/**
 * View-model for the category filter pill bar.
 * Produced by MenuComponent.filterCategories computed signal;
 * consumed by MenuFilterComponent as a typed input.
 */
export interface FilterCategory {
  readonly value: MenuCategory | 'all';
  readonly label: string;
  readonly count: number;
}
