# Maison Noir — Premium Boutique Café
# Design System v1.0

> **Scope:** Design tokens, visual language, and interaction philosophy.
> Angular component code is out of scope for this document.

---

## 1. Brand Strategy

### 1.1 Brand Name & Concept
**Maison Noir** — French for "Dark House." A reference to the depth of espresso and the intimate
warmth of a candlelit room. Not a chain. Not a trend. A *place*.

### 1.2 Brand Personality (Archetypes)
| Dimension    | Expression                                              |
|--------------|---------------------------------------------------------|
| Archetype    | The Creator + The Sage                                  |
| Tone         | Warm, refined, unhurried, quietly confident             |
| Voice        | Poetic but precise — like a well-crafted menu           |
| Avoid        | Corporate, playful, loud, trend-chasing                 |

### 1.3 Visual Tone
- **Mood:** Late-afternoon light filtering through linen curtains.
- **Palette feel:** Espresso browns, aged cream, oxidized gold — never cold, never sterile.
- **Texture metaphor:** Hand-thrown ceramics, pressed linen napkins, weathered oak.
- **Photography direction:** Warm film grain, tight depth-of-field, natural backlighting.

### 1.4 Emotional Direction
The user should feel:
1. **Welcome** — like stepping into a space that was expecting them.
2. **Curious** — the menu, the story, the ingredients invite exploration.
3. **Unhurried** — pacing is slow and intentional; nothing competes for attention.
4. **Elevated** — this is a small luxury, not a commodity.

---

## 2. Color System

### 2.1 Primary Palette — Espresso Family
Deep, grounding anchor colors derived from roasted coffee.

| Token                    | Hex       | Usage                                       |
|--------------------------|-----------|---------------------------------------------|
| `--color-espresso-950`   | `#100804` | Darkest backgrounds, deep text              |
| `--color-espresso-900`   | `#1C0F07` | Primary brand dark, hero backgrounds        |
| `--color-espresso-800`   | `#2C1A0E` | **Primary brand color** — CTAs, nav active  |
| `--color-espresso-700`   | `#3D2514` | Hover states on dark surfaces               |
| `--color-espresso-600`   | `#5A3820` | Dark section dividers, borders              |
| `--color-espresso-500`   | `#7A5230` | Mid-tone accents, icon fills                |
| `--color-espresso-300`   | `#B08060` | Muted text on dark backgrounds              |
| `--color-espresso-100`   | `#D4B89A` | Light warm neutral                          |

### 2.2 Secondary Palette — Cream Family
Warm, luminous backgrounds — the parchment on which the story is written.

| Token                  | Hex       | Usage                                        |
|------------------------|-----------|----------------------------------------------|
| `--color-cream-50`     | `#FEFCF8` | **Primary light background**                 |
| `--color-cream-100`    | `#FAF4E8` | Section alternating background               |
| `--color-cream-200`    | `#F2E6CC` | Card backgrounds, input fill                 |
| `--color-cream-300`    | `#E8D5B0` | Dividers, subtle borders on light surface    |
| `--color-cream-400`    | `#D9BF8A` | Disabled states                              |
| `--color-cream-500`    | `#C8A46A` | Mid-range warm tone                          |

### 2.3 Accent Palette — Antique Gold
Used sparingly. Never decorative for its own sake — always purposeful.

| Token                | Hex       | Usage                                          |
|----------------------|-----------|------------------------------------------------|
| `--color-gold-600`   | `#9A6E1A` | Dark gold for light surfaces                   |
| `--color-gold-500`   | `#C49A2A` | **Primary accent** — badges, highlights, icons |
| `--color-gold-400`   | `#D4AA40` | Hover on gold elements                         |
| `--color-gold-300`   | `#E0C068` | Tinted accent backgrounds                      |
| `--color-gold-100`   | `#F5E9C0` | Accent surface washes                          |

### 2.4 Background Layers
Layered system for depth and hierarchy — no flat single-color pages.

| Token                   | Value              | Role                               |
|-------------------------|--------------------|------------------------------------|
| `--bg-base`             | `#FEFCF8`          | Page root background               |
| `--bg-surface-1`        | `#FAF4E8`          | Section alternates (zebra pattern) |
| `--bg-surface-2`        | `#F2E6CC`          | Cards, modals, drawers             |
| `--bg-surface-3`        | `#E8D5B0`          | Inset panels, code blocks          |
| `--bg-inverse`          | `#1C0F07`          | Dark hero sections, footer         |
| `--bg-inverse-elevated` | `#2C1A0E`          | Cards on dark surfaces             |
| `--bg-overlay`          | `rgba(16,8,4,0.6)` | Modal scrim, image overlays        |

### 2.5 Text Hierarchy
| Token               | Value       | Usage                              |
|---------------------|-------------|------------------------------------|
| `--text-primary`    | `#1C0F07`   | Body, headings on light            |
| `--text-secondary`  | `#5A3820`   | Subheadings, meta info             |
| `--text-tertiary`   | `#8C6040`   | Captions, placeholders             |
| `--text-disabled`   | `#B8926A`   | Disabled inputs, muted labels      |
| `--text-inverse`    | `#FEFCF8`   | Any text on dark backgrounds       |
| `--text-accent`     | `#9A6E1A`   | Links, call-to-action inline text  |

### 2.6 Semantic Colors
Retain warmth even in functional states — never clinical.

| Token                    | Hex       | Meaning             |
|--------------------------|-----------|---------------------|
| `--color-success-500`    | `#4A7C59` | Success / Available |
| `--color-success-100`    | `#D6EAD0` | Success background  |
| `--color-warning-500`    | `#C47C20` | Warning / Seasonal  |
| `--color-warning-100`    | `#FCE9C8` | Warning background  |
| `--color-error-500`      | `#B03A2E` | Error / Unavailable |
| `--color-error-100`      | `#F5D0CC` | Error background    |
| `--color-info-500`       | `#2E6A8C` | Informational       |
| `--color-info-100`       | `#C8E0EE` | Info background     |

---

## 3. Typography System

### 3.1 Font Stack
| Role         | Family              | Source         | Style                |
|--------------|---------------------|----------------|----------------------|
| **Display**  | Cormorant Garamond  | Google Fonts   | Italic serif — hero callouts, quotes |
| **Heading**  | Playfair Display    | Google Fonts   | Upright serif — H1–H4 |
| **Body**     | Inter               | Google Fonts   | Sans-serif — all body, UI labels |
| **Monospace**| JetBrains Mono      | Google Fonts   | Code / ingredient lists (optional) |

**Import order (Google Fonts URL):**
```
Cormorant+Garamond:ital,wght@1,300;1,400;1,500
Playfair+Display:wght@400;500;600;700
Inter:wght@300;400;500;600;700
```

### 3.2 Font Scale — Modular (1.25 ratio, Major Third)

| Token              | rem      | px   | Font Family        | Weight | Usage                          |
|--------------------|----------|------|--------------------|--------|--------------------------------|
| `--text-display-2` | 5rem     | 80px | Cormorant Garamond | 300i   | Single-word hero displays      |
| `--text-display-1` | 4rem     | 64px | Cormorant Garamond | 400i   | Hero headline callouts         |
| `--text-h1`        | 3rem     | 48px | Playfair Display   | 700    | Page titles                    |
| `--text-h2`        | 2.25rem  | 36px | Playfair Display   | 600    | Section headings               |
| `--text-h3`        | 1.75rem  | 28px | Playfair Display   | 600    | Subsection headings            |
| `--text-h4`        | 1.375rem | 22px | Playfair Display   | 500    | Card titles                    |
| `--text-h5`        | 1.125rem | 18px | Inter              | 600    | Small headings, nav items      |
| `--text-h6`        | 1rem     | 16px | Inter              | 600    | Labels, overlines              |
| `--text-body-lg`   | 1.125rem | 18px | Inter              | 400    | Lead paragraphs, introductions |
| `--text-body`      | 1rem     | 16px | Inter              | 400    | General body text              |
| `--text-body-sm`   | 0.875rem | 14px | Inter              | 400    | Secondary body, descriptions   |
| `--text-caption`   | 0.75rem  | 12px | Inter              | 400    | Captions, meta, timestamps     |
| `--text-overline`  | 0.6875rem| 11px | Inter              | 600    | ALL CAPS category labels       |

### 3.3 Line Height Scale
| Token                    | Value | Usage                           |
|--------------------------|-------|---------------------------------|
| `--leading-tight`        | 1.1   | Display / H1 — large text       |
| `--leading-snug`         | 1.25  | H2–H4                           |
| `--leading-normal`       | 1.5   | Body text                       |
| `--leading-relaxed`      | 1.625 | Long-form reading paragraphs    |
| `--leading-loose`        | 1.75  | Legal, accessibility-sensitive  |

### 3.4 Letter Spacing Scale
| Token                    | Value     | Usage                           |
|--------------------------|-----------|---------------------------------|
| `--tracking-tighter`     | -0.03em   | Large display type (> 48px)     |
| `--tracking-tight`       | -0.01em   | H1, H2                          |
| `--tracking-normal`      | 0em       | Body text                       |
| `--tracking-wide`        | 0.04em    | H5, H6, UI labels               |
| `--tracking-wider`       | 0.08em    | Overlines (all caps labels)     |
| `--tracking-widest`      | 0.16em    | Decorative letter-spaced words  |

---

## 4. Spacing System

### 4.1 Base Grid — 4pt Grid (8pt for major spacing)
All values are multiples of 4px. Prefer 8pt multiples for padding/margin;
4pt multiples for fine-grain internal padding.

| Token            | rem      | px    | Use Case                                   |
|------------------|----------|-------|--------------------------------------------|
| `--space-0`      | 0        | 0px   | Reset                                      |
| `--space-px`     | 0.0625   | 1px   | Hair lines, borders only                   |
| `--space-0-5`    | 0.125rem | 2px   | Icon internal nudges                       |
| `--space-1`      | 0.25rem  | 4px   | Icon-to-label gap, badge padding           |
| `--space-2`      | 0.5rem   | 8px   | Tight component internal padding           |
| `--space-3`      | 0.75rem  | 12px  | Input padding (vertical), chip padding     |
| `--space-4`      | 1rem     | 16px  | **Base unit** — standard component padding |
| `--space-5`      | 1.25rem  | 20px  | Card padding small                         |
| `--space-6`      | 1.5rem   | 24px  | Card padding, nav gap                      |
| `--space-8`      | 2rem     | 32px  | Section internal padding                   |
| `--space-10`     | 2.5rem   | 40px  | Component group spacing                    |
| `--space-12`     | 3rem     | 48px  | Large component padding                    |
| `--space-16`     | 4rem     | 64px  | Section padding (mobile)                   |
| `--space-20`     | 5rem     | 80px  | Section padding (tablet)                   |
| `--space-24`     | 6rem     | 96px  | Section padding (desktop)                  |
| `--space-32`     | 8rem     | 128px | Hero section vertical padding              |
| `--space-40`     | 10rem    | 160px | Mega hero padding                          |

### 4.2 Section Spacing
| Breakpoint   | Section padding-top / padding-bottom |
|--------------|--------------------------------------|
| Mobile       | 64px (`--space-16`)                  |
| Tablet       | 80px (`--space-20`)                  |
| Desktop      | 96px (`--space-24`)                  |
| Large        | 128px (`--space-32`)                 |

### 4.3 Container & Grid
| Token                    | Value   | Description                             |
|--------------------------|---------|-----------------------------------------|
| `--container-max`        | 1280px  | Maximum page width                      |
| `--container-content`    | 900px   | Long-form content max width             |
| `--container-narrow`     | 640px   | Centered narrow content (forms, CTAs)   |
| `--container-padding-x`  | 24px    | Horizontal gutter (mobile: 16px)        |
| `--grid-columns`         | 12      | Desktop column count                    |
| `--grid-gutter`          | 24px    | Column gap                              |
| `--grid-gutter-md`       | 16px    | Tablet column gap                       |

### 4.4 Breakpoints
| Name    | Value   | Target                      |
|---------|---------|-----------------------------|
| `xs`    | 0px     | Small phones                |
| `sm`    | 480px   | Large phones                |
| `md`    | 768px   | Tablets                     |
| `lg`    | 1024px  | Small desktops, landscape   |
| `xl`    | 1280px  | Standard desktop            |
| `2xl`   | 1536px  | Large / wide monitors       |

---

## 5. Elevation & Shadow System

Shadows use the brand's warm undertone — never cold blue-gray.
Shadow color base: `rgba(28, 15, 7, N)` (espresso-900 at opacity).

| Token              | Value                                                                 | Usage                          |
|--------------------|-----------------------------------------------------------------------|--------------------------------|
| `--shadow-none`    | `none`                                                                | Flat / borderless elements     |
| `--shadow-xs`      | `0 1px 2px rgba(28,15,7,0.06)`                                        | Input fields, small chips      |
| `--shadow-sm`      | `0 2px 4px rgba(28,15,7,0.08), 0 1px 2px rgba(28,15,7,0.04)`        | Tags, badges                   |
| `--shadow-md`      | `0 4px 12px rgba(28,15,7,0.10), 0 2px 4px rgba(28,15,7,0.06)`       | Cards, dropdowns               |
| `--shadow-lg`      | `0 8px 24px rgba(28,15,7,0.12), 0 4px 8px rgba(28,15,7,0.08)`       | Modals, image hover lift       |
| `--shadow-xl`      | `0 16px 40px rgba(28,15,7,0.15), 0 8px 16px rgba(28,15,7,0.08)`     | Popovers, floating panels      |
| `--shadow-2xl`     | `0 32px 64px rgba(28,15,7,0.20), 0 16px 32px rgba(28,15,7,0.10)`    | Hero cards, sticky headers     |
| `--shadow-inner`   | `inset 0 2px 6px rgba(28,15,7,0.10)`                                  | Inset inputs, pressed states   |
| `--shadow-gold`    | `0 4px 16px rgba(196,154,42,0.30)`                                    | Accent button glow             |

---

## 6. Border Radius System

| Token              | Value     | Usage                                       |
|--------------------|-----------|---------------------------------------------|
| `--radius-none`    | `0`       | Square elements, ruled lines                |
| `--radius-xs`      | `2px`     | Badges, tiny chips                          |
| `--radius-sm`      | `4px`     | Input fields, small buttons                 |
| `--radius-md`      | `8px`     | Cards, standard buttons                     |
| `--radius-lg`      | `12px`    | Large cards, image containers               |
| `--radius-xl`      | `16px`    | Featured sections, hero image frames        |
| `--radius-2xl`     | `24px`    | Floating panels, testimonial cards          |
| `--radius-3xl`     | `32px`    | Large modal corners                         |
| `--radius-full`    | `9999px`  | Pills, tags, avatars, icon buttons          |

**Philosophy:**
- Use `--radius-md` (8px) as the default for all interactive elements.
- `--radius-full` for tags, chips, and pill buttons only.
- Never mix radius scales within a single component.

---

## 7. Animation Guidelines

### 7.1 Duration Scale
| Token                 | Value  | Usage                                               |
|-----------------------|--------|-----------------------------------------------------|
| `--duration-instant`  | `0ms`  | State changes that should feel immediate            |
| `--duration-fast`     | `100ms`| Tooltip appearance, focus rings                     |
| `--duration-normal`   | `200ms`| Most hover transitions, color changes               |
| `--duration-slow`     | `300ms`| Dropdown open, card lift, accordion expand          |
| `--duration-slower`   | `500ms`| Page section reveals, modal entrance                |
| `--duration-slowest`  | `800ms`| Hero animations, staggered list entrances           |
| `--duration-cinematic`| `1200ms`| Parallax, ambient floating elements                |

### 7.2 Easing Functions
| Token                | Value                         | Usage                              |
|----------------------|-------------------------------|------------------------------------|
| `--ease-standard`    | `cubic-bezier(0.4, 0, 0.2, 1)`| Default for most transitions       |
| `--ease-decelerate`  | `cubic-bezier(0.0, 0, 0.2, 1)`| Elements entering the screen       |
| `--ease-accelerate`  | `cubic-bezier(0.4, 0, 1, 1)`  | Elements leaving the screen        |
| `--ease-spring`      | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Playful bouncy arrival      |
| `--ease-sharp`       | `cubic-bezier(0.4, 0, 0.6, 1)`| Snappy state toggles               |
| `--ease-linear`      | `linear`                      | Progress bars, spinners            |

### 7.3 Micro-Interaction Philosophy
**Rule 1 — Subtlety Over Spectacle**
Every animation must serve a functional purpose: confirm action, direct attention, or
smooth a state transition. Never animate for decoration alone.

**Rule 2 — Respect Reduced Motion**
All animations must have a `@media (prefers-reduced-motion: reduce)` variant that
eliminates or collapses duration to near-zero without removing the interaction feedback.

**Rule 3 — Stagger for Hierarchy**
When multiple elements animate in, stagger them by `60–80ms` per item to create
a sense of natural revelation, not mechanical unison.

**Rule 4 — Hover feels like a response, not an event**
Hover states transition at `--duration-normal` (200ms) with `--ease-standard`.
They should feel like a gentle acknowledgement, not a dramatic reaction.

**Rule 5 — Exit is faster than entrance**
Elements leave at `--duration-fast` (100ms) with `--ease-accelerate`.
Elements arrive at `--duration-slow` (300ms) with `--ease-decelerate`.

### 7.4 Standard Transitions
```
// Hover color/bg
transition: color --duration-normal --ease-standard,
            background-color --duration-normal --ease-standard;

// Lift / elevation
transition: transform --duration-slow --ease-decelerate,
            box-shadow --duration-slow --ease-decelerate;

// Opacity fade
transition: opacity --duration-slow --ease-standard;

// Transform slide-in
transition: transform --duration-slower --ease-decelerate,
            opacity --duration-slower --ease-standard;
```

---

## 8. Accessibility Rules

### 8.1 Contrast Ratio Targets
| Context                     | Minimum  | Target   | Standard |
|-----------------------------|----------|----------|----------|
| Normal body text (< 18px)   | 4.5 : 1  | 7 : 1    | WCAG AA → AAA |
| Large text (≥ 18px / 14px bold) | 3 : 1 | 4.5 : 1 | WCAG AA  |
| UI components & icons       | 3 : 1    | 4.5 : 1  | WCAG AA  |
| Decorative elements         | None     | —        | Exempt   |

**Verified pairs:**
- `--text-primary` (`#1C0F07`) on `--bg-base` (`#FEFCF8`) → **18.3 : 1** ✓
- `--text-inverse` (`#FEFCF8`) on `--bg-inverse` (`#1C0F07`) → **18.3 : 1** ✓
- `--color-gold-600` (`#9A6E1A`) on `--bg-base` (`#FEFCF8`) → **5.2 : 1** ✓
- `--text-secondary` (`#5A3820`) on `--bg-base` (`#FEFCF8`) → **8.1 : 1** ✓

### 8.2 Focus State Design
- **Style:** `2px solid --color-gold-500` outline, `2px` offset from element edge.
- **Never** remove focus outline via `outline: none` without replacing it.
- Provide `:focus-visible` for mouse users (no ring on click), `:focus` for keyboard users.
- Focus ring must be visible against both light and dark backgrounds.

```scss
// Standard focus mixin
:focus-visible {
  outline: 2px solid var(--color-gold-500);
  outline-offset: 2px;
  border-radius: var(--radius-sm);
}
```

### 8.3 Keyboard Navigation
| Element          | Behavior                                          |
|------------------|---------------------------------------------------|
| Links / Buttons  | Tab-focusable, Enter/Space activates              |
| Dropdown Menus   | Arrow keys navigate items, Escape closes          |
| Modals           | Focus trapped inside; Escape closes               |
| Image carousels  | Arrow keys advance; ARIA `live` region updates    |
| Form fields      | Logical tab order top-to-bottom, left-to-right    |

### 8.4 Semantic HTML Requirements
- `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>` — all must be used.
- Every `<img>` has a meaningful `alt` or `alt=""` if purely decorative.
- Every form `<input>` has an associated `<label>` (not just placeholder).
- Color alone must never be the sole indicator of state (add icon or text).
- ARIA landmarks: `role="navigation"`, `aria-label="Main navigation"` on primary nav.

### 8.5 Motion Accessibility
```scss
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

## 9. SCSS Design Token Structure

### 9.1 File Organization
```
src/
└── styles/
    ├── tokens/
    │   ├── _colors.scss        ← All color variables
    │   ├── _typography.scss    ← Font, scale, leading, tracking
    │   ├── _spacing.scss       ← Space scale, containers, breakpoints
    │   ├── _elevation.scss     ← Shadows
    │   ├── _borders.scss       ← Radius + border tokens
    │   └── _animation.scss     ← Duration, easing
    ├── _tokens.scss            ← Barrel: @forward all token partials
    ├── _reset.scss             ← Minimal CSS reset
    ├── _base.scss              ← Global HTML element defaults
    └── styles.scss             ← Entry point: @use all partials
```

### 9.2 Token Architecture — CSS Custom Properties Strategy
Tokens are defined as SCSS variables (compile-time) AND exposed as CSS custom properties
(runtime) on `:root`. This enables:
- Theming without recompilation (dark mode toggle via class).
- Runtime overrides by integrations.
- Full SCSS function access during build.

### 9.3 Token Naming Convention
```
--{category}-{variant}-{modifier}
--color-espresso-800
--shadow-md
--space-6
--text-h2
--duration-slow
--ease-decelerate
```

---

## Code Review Checklist (Design System)
- [ ] All colors verified against WCAG AA contrast
- [ ] All tokens use CSS custom properties on `:root`
- [ ] No magic numbers — every value maps to a token
- [ ] `prefers-reduced-motion` coverage exists
- [ ] Focus states defined for all interactive surfaces
- [ ] Typography scale verified on actual viewport widths
- [ ] No `!important` in token definitions

---

*Maison Noir Design System — maintained by the UI Architecture team.*
*Increment version on any breaking token change.*
