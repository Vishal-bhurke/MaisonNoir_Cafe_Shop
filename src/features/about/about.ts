import { ChangeDetectionStrategy, Component } from '@angular/core';

/**
 * AboutComponent — feature stub.
 * Full implementation in the next step (story, team, values sections).
 */
@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <section style="max-width: 1200px; margin: 0 auto; padding: 6rem 2rem;">
      <div style="text-align: center; margin-bottom: 4rem;">
        <p style="color: var(--color-gold-500); text-transform: uppercase; letter-spacing: 0.15em; font-size: 0.875rem; margin-bottom: 1rem;">Our Story</p>
        <h1 style="font-family: var(--font-heading); font-size: 3rem; color: var(--color-espresso-900); margin-bottom: 1.5rem;">About Maison Noir</h1>
        <p style="font-size: 1.125rem; line-height: 1.8; color: var(--color-espresso-700); max-width: 700px; margin: 0 auto;">
          Founded in 2018, Maison Noir is more than a café—it's a quiet rebellion against the ordinary.
          We source single-origin beans from small farms, roast them in-house, and craft each cup with intention.
        </p>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 3rem; margin-bottom: 4rem;">
        <div style="text-align: center; padding: 2rem;">
          <div style="width: 60px; height: 60px; margin: 0 auto 1.5rem; background: var(--color-gold-100); border-radius: 50%; display: flex; align-items: center; justify-content: center;">
            <img src="/icons/coffee.svg" alt="" style="width: 28px; height: 28px; filter: brightness(0) saturate(100%) invert(60%) sepia(50%) saturate(500%) hue-rotate(359deg);" />
          </div>
          <h3 style="font-family: var(--font-heading); font-size: 1.25rem; color: var(--color-espresso-900); margin-bottom: 0.75rem;">Artisan Roasted</h3>
          <p style="color: var(--color-espresso-600); line-height: 1.7;">Small-batch roasting ensures every bean reaches its fullest potential, revealing unique flavor notes.</p>
        </div>

        <div style="text-align: center; padding: 2rem;">
          <div style="width: 60px; height: 60px; margin: 0 auto 1.5rem; background: var(--color-gold-100); border-radius: 50%; display: flex; align-items: center; justify-content: center;">
            <img src="/icons/utensils.svg" alt="" style="width: 28px; height: 28px; filter: brightness(0) saturate(100%) invert(60%) sepia(50%) saturate(500%) hue-rotate(359deg);" />
          </div>
          <h3 style="font-family: var(--font-heading); font-size: 1.25rem; color: var(--color-espresso-900); margin-bottom: 0.75rem;">Fresh Provisions</h3>
          <p style="color: var(--color-espresso-600); line-height: 1.7;">Our pastries and food are baked daily using traditional French techniques and local ingredients.</p>
        </div>

        <div style="text-align: center; padding: 2rem;">
          <div style="width: 60px; height: 60px; margin: 0 auto 1.5rem; background: var(--color-gold-100); border-radius: 50%; display: flex; align-items: center; justify-content: center;">
            <span style="font-size: 1.5rem;">✦</span>
          </div>
          <h3 style="font-family: var(--font-heading); font-size: 1.25rem; color: var(--color-espresso-900); margin-bottom: 0.75rem;">Crafted with Care</h3>
          <p style="color: var(--color-espresso-600); line-height: 1.7;">Every drink is a work of art, prepared by skilled baristas who understand coffee as a craft.</p>
        </div>
      </div>

      <div style="background: var(--color-cream-100); padding: 3rem; border-radius: 1rem; text-align: center;">
        <p style="font-style: italic; font-size: 1.25rem; color: var(--color-espresso-700); line-height: 1.8; max-width: 800px; margin: 0 auto;">
          "We believe that coffee should be more than a routine—it should be a moment of pause,
          a small act of resistance against the rush of modern life."
        </p>
        <p style="margin-top: 1.5rem; color: var(--color-gold-600); font-weight: 500;">— The Maison Noir Team</p>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {}
