import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
import {
  PreloadAllModules,
  provideRouter,
  withComponentInputBinding,
  withInMemoryScrolling,
  withPreloading,
  withViewTransitions,
} from '@angular/router';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    // Captures unhandled browser errors and forwards them to Angular's error handler
    provideBrowserGlobalErrorListeners(),

    // eventCoalescing: batches zone.js change detection triggers in the same
    // microtask queue for fewer CD cycles on rapid DOM events (e.g. scroll + resize)
    provideZoneChangeDetection({ eventCoalescing: true }),

    provideRouter(
      routes,
      // Binds route params/queryParams directly as component @Input() signals
      withComponentInputBinding(),
      // Restores scroll position on browser back/forward navigation
      withInMemoryScrolling({ scrollPositionRestoration: 'enabled' }),
      // Native CSS View Transitions API for page-to-page animation (Angular 17+)
      withViewTransitions(),
      // Preloads all lazy feature chunks after the initial load completes
      withPreloading(PreloadAllModules),
    ),

    // HTTP client — interceptors registered via DI (ready for auth interceptor in Step 3)
    provideHttpClient(withInterceptorsFromDi()),
  ],
};
