import { ChangeDetectionStrategy, Component } from '@angular/core';

/**
 * ContactComponent — feature stub.
 * Full implementation in the next step (contact form, map, opening hours).
 */
@Component({
  selector: 'app-contact',
  standalone: true,
  template: `
    <section style="max-width: 1200px; margin: 0 auto; padding: 6rem 2rem;">
      <div style="text-align: center; margin-bottom: 4rem;">
        <p style="color: var(--color-gold-500); text-transform: uppercase; letter-spacing: 0.15em; font-size: 0.875rem; margin-bottom: 1rem;">Get In Touch</p>
        <h1 style="font-family: var(--font-heading); font-size: 3rem; color: var(--color-espresso-900); margin-bottom: 1.5rem;">Visit Us</h1>
        <p style="font-size: 1.125rem; line-height: 1.8; color: var(--color-espresso-700); max-width: 600px; margin: 0 auto;">
          Step into our space in the Old Quarter. We're here to serve you exceptional coffee and good conversation.
        </p>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2.5rem; margin-bottom: 4rem;">

        <!-- Location -->
        <div style="background: var(--color-cream-50); padding: 2rem; border-radius: 1rem; border: 1px solid var(--color-cream-200);">
          <div style="display: flex; align-items: flex-start; gap: 1rem; margin-bottom: 1rem;">
            <img src="/icons/map-pin.svg" alt="" style="width: 24px; height: 24px; flex-shrink: 0; margin-top: 2px; filter: brightness(0) saturate(100%) invert(60%) sepia(50%) saturate(500%) hue-rotate(359deg);" />
            <div>
              <h3 style="font-family: var(--font-heading); font-size: 1.125rem; color: var(--color-espresso-900); margin-bottom: 0.5rem;">Location</h3>
              <address style="font-style: normal; color: var(--color-espresso-600); line-height: 1.7;">
                12 Rue des Artisans<br/>
                Old Quarter<br/>
                Paris, France
              </address>
            </div>
          </div>
        </div>

        <!-- Hours -->
        <div style="background: var(--color-cream-50); padding: 2rem; border-radius: 1rem; border: 1px solid var(--color-cream-200);">
          <div style="display: flex; align-items: flex-start; gap: 1rem; margin-bottom: 1rem;">
            <img src="/icons/clock.svg" alt="" style="width: 24px; height: 24px; flex-shrink: 0; margin-top: 2px; filter: brightness(0) saturate(100%) invert(60%) sepia(50%) saturate(500%) hue-rotate(359deg);" />
            <div>
              <h3 style="font-family: var(--font-heading); font-size: 1.125rem; color: var(--color-espresso-900); margin-bottom: 0.5rem;">Hours</h3>
              <p style="color: var(--color-espresso-600); line-height: 1.7; margin: 0;">
                Monday – Friday<br/>
                <span style="color: var(--color-espresso-800);">7:00 AM – 7:00 PM</span>
              </p>
              <p style="color: var(--color-espresso-600); line-height: 1.7; margin-top: 0.75rem; margin-bottom: 0;">
                Saturday – Sunday<br/>
                <span style="color: var(--color-espresso-800);">8:00 AM – 6:00 PM</span>
              </p>
            </div>
          </div>
        </div>

        <!-- Contact -->
        <div style="background: var(--color-cream-50); padding: 2rem; border-radius: 1rem; border: 1px solid var(--color-cream-200);">
          <div style="display: flex; align-items: flex-start; gap: 1rem; margin-bottom: 1.5rem;">
            <img src="/icons/phone.svg" alt="" style="width: 24px; height: 24px; flex-shrink: 0; margin-top: 2px; filter: brightness(0) saturate(100%) invert(60%) sepia(50%) saturate(500%) hue-rotate(359deg);" />
            <div>
              <h3 style="font-family: var(--font-heading); font-size: 1.125rem; color: var(--color-espresso-900); margin-bottom: 0.5rem;">Phone</h3>
              <a href="tel:+33142857234" style="color: var(--color-espresso-700); text-decoration: none;">+33 1 42 85 72 34</a>
            </div>
          </div>
          <div style="display: flex; align-items: flex-start; gap: 1rem;">
            <img src="/icons/mail.svg" alt="" style="width: 24px; height: 24px; flex-shrink: 0; margin-top: 2px; filter: brightness(0) saturate(100%) invert(60%) sepia(50%) saturate(500%) hue-rotate(359deg);" />
            <div>
              <h3 style="font-family: var(--font-heading); font-size: 1.125rem; color: var(--color-espresso-900); margin-bottom: 0.5rem;">Email</h3>
              <a href="mailto:hello@maisonnoir.com" style="color: var(--color-gold-500); text-decoration: none;">hello&#64;maisonnoir.com</a>
            </div>
          </div>
        </div>

      </div>

      <div style="background: var(--bg-inverse); color: var(--text-inverse); padding: 3rem; border-radius: 1rem; text-align: center;">
        <h2 style="font-family: var(--font-heading); font-size: 2rem; margin-bottom: 1rem;">Reserve a Table</h2>
        <p style="color: var(--color-espresso-300); margin-bottom: 2rem; max-width: 600px; margin-left: auto; margin-right: auto;">
          Planning a gathering? We welcome reservations for groups of 4 or more.
          Drop us a line and we'll make sure you have the perfect spot.
        </p>
        <a href="mailto:hello@maisonnoir.com?subject=Table Reservation"
           style="display: inline-block; background: var(--color-gold-500); color: var(--color-espresso-900);
                  padding: 1rem 2rem; border-radius: 0.5rem; text-decoration: none; font-weight: 500;
                  transition: background-color 0.2s;">
          Send Reservation Request
        </a>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {}
