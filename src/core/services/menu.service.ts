import { Injectable } from '@angular/core';

import { MenuItem, MenuCategory } from '@core/models/menu-item.model';

// =============================================================================
// Static menu data — replace this array with an HTTP call when a backend exists.
// Structure mirrors what an API response would look like so the swap is trivial.
// =============================================================================

const MENU_ITEMS: ReadonlyArray<MenuItem> = [
  // ── Coffee ──────────────────────────────────────────────────────────────────
  {
    id: 'coffee-espresso-classico',
    name: 'Espresso Classico',
    description:
      'Our house blend pulled at 9 bars. Intense, velvety, with a lasting hazelnut finish.',
    price: 3.20,
    category: 'coffee',
    origin: 'Ethiopia / Colombia blend',
    tag: 'popular',
    imageAlt: 'A double espresso in a handmade ceramic cup on a marble counter',
    imageUrl: '/images/item-espresso.jpg',
  },
  {
    id: 'coffee-cortado',
    name: 'Cortado',
    description:
      'Equal parts espresso and gently steamed whole milk. Silky and balanced in a small glass.',
    price: 3.80,
    category: 'coffee',
    origin: 'House blend',
    imageAlt: 'A cortado in a small clear glass on a wooden tray',
    imageUrl: '/images/item-cortado.jpg',
  },
  {
    id: 'coffee-flat-white',
    name: 'Flat White',
    description:
      'Double ristretto with micro-foamed whole milk. Intense coffee flavour with a smooth, velvety texture.',
    price: 4.20,
    category: 'coffee',
    origin: 'House blend',
    tag: 'popular',
    imageAlt: 'A flat white with latte art in a small white ceramic cup',
    imageUrl: '/images/item-flat-white.jpg',
  },
  {
    id: 'coffee-pour-over',
    name: 'Single Origin Pour Over',
    description:
      'Hand-poured through a ceramic dripper, one cup at a time. Ask your barista about today\'s origin and tasting notes.',
    price: 5.50,
    category: 'coffee',
    origin: 'Rotates weekly',
    tag: 'seasonal',
    imageAlt: 'Pour over coffee being brewed through a glass dripper',
    imageUrl: '/images/item-pour-over.jpg',
  },
  {
    id: 'coffee-cold-brew',
    name: 'Cold Brew Reserve',
    description:
      'Steeped for 18 hours in cold water, never heated. Naturally sweet with notes of dark fruit and molasses.',
    price: 5.00,
    category: 'coffee',
    origin: 'Guatemala, Huehuetenango',
    tag: 'new',
    imageAlt: 'A tall glass of cold brew coffee with ice',
    imageUrl: '/images/item-cold-brew.jpg',
  },
  {
    id: 'coffee-cafe-creme',
    name: 'Café Crème',
    description:
      'A long espresso with a thin, glossy crema layer. Clean, uncomplicated, and deeply satisfying.',
    price: 3.50,
    category: 'coffee',
    origin: 'House blend',
    imageAlt: 'A café crème in a tall white ceramic cup',
    imageUrl: '/images/item-cafe-creme.jpg',
  },
  // ── Tea ─────────────────────────────────────────────────────────────────────
  {
    id: 'tea-matcha',
    name: 'Ceremonial Matcha',
    description:
      'Stone-ground Uji matcha whisked to a smooth, vivid froth. Served hot or over ice with oat milk.',
    price: 5.00,
    category: 'tea',
    origin: 'Uji, Kyoto Prefecture',
    tag: 'popular',
    imageAlt: 'A bowl of ceremonial matcha with a bamboo whisk beside it',
    imageUrl: '/images/item-matcha.jpg',
  },
  {
    id: 'tea-darjeeling',
    name: 'Darjeeling First Flush',
    description:
      'Light, floral, and unmistakably muscatel. The champagne of teas, steeped precisely at 85 °C for three minutes.',
    price: 4.50,
    category: 'tea',
    origin: 'Makaibari Estate, West Bengal',
    tag: 'seasonal',
    imageAlt: 'A glass teapot of amber darjeeling tea on a marble surface',
    imageUrl: '/images/item-darjeeling-tea.jpg',
  },
  {
    id: 'tea-oolong',
    name: 'Oolong House Blend',
    description:
      'Semi-oxidised leaves with notes of warm stone fruit and toasted grain. Complex, lingering, never bitter.',
    price: 4.20,
    category: 'tea',
    origin: 'Li Shan, Taiwan',
    imageAlt: 'A cup of amber oolong tea beside dried tea leaves',
    imageUrl: '/images/item-oolong-tea.jpg',
  },
  {
    id: 'tea-chamomile',
    name: 'Chamomile & Lavender',
    description:
      'Caffeine-free blend of dried chamomile flowers and organic Provençal lavender. Calming, aromatic, effortlessly gentle.',
    price: 3.80,
    category: 'tea',
    origin: 'Provence, France',
    imageAlt: 'A cup of pale chamomile tea with dried lavender flowers',
    imageUrl: '/images/item-chamomile-tea.jpg',
  },
  // ── Pastry ──────────────────────────────────────────────────────────────────
  {
    id: 'pastry-croissant',
    name: 'Butter Croissant',
    description:
      'Made fresh each morning with AOP Poitou-Charentes butter and laminated by hand. Flaky, golden, irreplaceable.',
    price: 3.20,
    category: 'pastry',
    origin: 'Baked in-house',
    tag: 'popular',
    imageAlt: 'A golden butter croissant on a ceramic plate with a white napkin',
    imageUrl: '/images/item-croissant.jpg',
  },
  {
    id: 'pastry-almond-tart',
    name: 'Almond & Honey Tart',
    description:
      'Crisp sablé shell filled with frangipane and local wildflower honey. Topped with flaked almonds, served at room temperature.',
    price: 4.50,
    category: 'pastry',
    origin: 'Baked in-house',
    tag: 'seasonal',
    imageAlt: 'A golden almond tart with flaked almonds on a marble board',
    imageUrl: '/images/item-almond-tart.jpg',
  },
  {
    id: 'pastry-pain-au-chocolat',
    name: 'Pain au Chocolat',
    description:
      'Hand-laminated dough wrapped around two batons of 70% Valrhona dark chocolate. Best eaten slightly warm.',
    price: 3.60,
    category: 'pastry',
    origin: 'Baked in-house',
    imageAlt: 'A pain au chocolat broken open to reveal the dark chocolate inside',
    imageUrl: '/images/item-pain-au-chocolat.jpg',
  },
  {
    id: 'pastry-financier',
    name: 'Seasonal Financier',
    description:
      'Browned-butter almond cake with a rotating seasonal topping — strawberry compote, roasted fig, or poached pear.',
    price: 3.80,
    category: 'pastry',
    origin: 'Baked in-house',
    tag: 'new',
    imageAlt: 'A small rectangular financier cake with a seasonal fruit topping',
    imageUrl: '/images/item-financier.jpg',
  },
  // ── Food ────────────────────────────────────────────────────────────────────
  {
    id: 'food-avocado-toast',
    name: 'Avocado & Labneh Toast',
    description:
      'Sourdough from the bakery next door, smashed avocado, house-made labneh, dukkah, preserved lemon, and a drizzle of olive oil.',
    price: 9.50,
    category: 'food',
    origin: 'Sourced locally',
    tag: 'popular',
    imageAlt: 'Avocado toast with labneh and dukkah on sourdough bread',
    imageUrl: '/images/item-avocado-toast.jpg',
  },
  {
    id: 'food-charcuterie',
    name: 'Cheese & Charcuterie Board',
    description:
      'Rotating selection of aged cheeses and cured meats, served with house-made pickles, honeycomb, and grilled sourdough.',
    price: 14.00,
    category: 'food',
    origin: 'Sourced locally',
    imageAlt: 'A marble board with cheeses, charcuterie, and accompaniments',
    imageUrl: '/images/item-charcuterie.jpg',
  },
  {
    id: 'food-granola',
    name: 'House Granola Bowl',
    description:
      'Toasted oats with mixed seeds, dried cherries, and house-made seasonal jam. Served with cold whole milk or oat milk.',
    price: 7.50,
    category: 'food',
    origin: 'Made in-house',
    imageAlt: 'A bowl of golden granola with dried fruit and milk being poured',
    imageUrl: '/images/item-granola.jpg',
  },
];

// =============================================================================
// MenuService
// =============================================================================

/**
 * MenuService — single source of truth for menu data.
 *
 * providedIn: 'root' ensures a single instance is shared across lazy-loaded
 * features (home preview + full menu page) without any module boilerplate.
 *
 * All methods return ReadonlyArray to prevent accidental mutation at the
 * call site. When upgraded to HTTP, only this service file changes.
 */
@Injectable({ providedIn: 'root' })
export class MenuService {
  /** Full menu — treat as immutable. */
  readonly items: ReadonlyArray<MenuItem> = MENU_ITEMS;

  /** Returns items for a given category, or all items when `'all'` is passed. */
  getByCategory(category: MenuCategory | 'all'): ReadonlyArray<MenuItem> {
    if (category === 'all') return this.items;
    return this.items.filter((item) => item.category === category);
  }

  /**
   * Returns the unique categories present in the data, in the order they first
   * appear. This drives the filter bar without hard-coding the list twice.
   */
  getUniqueCategories(): ReadonlyArray<MenuCategory> {
    const seen = new Set<MenuCategory>();
    return this.items.reduce<MenuCategory[]>((acc, item) => {
      if (!seen.has(item.category)) {
        seen.add(item.category);
        acc.push(item.category);
      }
      return acc;
    }, []);
  }
}
