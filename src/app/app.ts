import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

/**
 * Root bootstrap component.
 * Responsibility: render the router outlet only.
 * All layout (Navbar, Footer, Shell) is handled by ShellComponent
 * which is loaded as the root route's component in app.routes.ts.
 */
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: '<router-outlet />',
  styles: [':host { display: block; }'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {}
