import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NavbarComponent } from '@layouts/navbar/navbar';
import { FooterComponent } from '@layouts/footer/footer';

/**
 * ShellComponent — root layout wrapper.
 *
 * Renders the persistent Navbar + Footer that surround every public page.
 * The inner <router-outlet> swaps feature pages without re-mounting the shell.
 *
 * OnPush: shell state never changes after mount — no CD needed unless
 * a child emits an event that propagates up (none currently planned).
 */
@Component({
  selector: 'app-shell',
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './shell.html',
  styleUrl: './shell.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShellComponent {}
