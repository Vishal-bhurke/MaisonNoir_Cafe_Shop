/**
 * Navigation domain models.
 * All properties readonly — state is never mutated directly.
 */

export interface NavLink {
  readonly label: string;
  readonly path: string;
  readonly ariaLabel: string;
}

export interface NavConfig {
  readonly brand: string;
  readonly tagline: string;
  readonly links: ReadonlyArray<NavLink>;
}
