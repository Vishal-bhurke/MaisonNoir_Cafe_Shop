import { Routes } from '@angular/router';

import { ShellComponent } from '@layouts/shell/shell';

export const routes: Routes = [
  {
    // Shell wraps all public routes — provides Navbar + Footer layout
    path: '',
    component: ShellComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('@features/home/home').then((m) => m.HomeComponent),
        title: 'Maison Noir — Artisan Coffee & Provisions',
      },
      {
        path: 'menu',
        loadComponent: () =>
          import('@features/menu/menu').then((m) => m.MenuComponent),
        title: 'Our Menu — Maison Noir',
      },
      {
        path: 'about',
        loadComponent: () =>
          import('@features/about/about').then((m) => m.AboutComponent),
        title: 'About Us — Maison Noir',
      },
      {
        path: 'contact',
        loadComponent: () =>
          import('@features/contact/contact').then((m) => m.ContactComponent),
        title: 'Contact — Maison Noir',
      },
      {
        // Catch-all: redirect unknown paths to home
        path: '**',
        redirectTo: '',
        pathMatch: 'full',
      },
    ],
  },
];
