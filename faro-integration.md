## 2. Frontend integration

### 2.1 React — `@grafana/faro-react`

```bash
npm install @grafana/faro-react @grafana/faro-web-tracing
```

```ts
// src/faro.ts  — import this file BEFORE your app renders
import {
  initializeFaro,
  getWebInstrumentations,
  ReactIntegration,
  createReactRouterV6DataOptions,
  LogLevel,
} from '@grafana/faro-react';
import { TracingInstrumentation } from '@grafana/faro-web-tracing';
import { matchRoutes } from 'react-router-dom';

export const faro = initializeFaro({
  // Alloy faro.receiver endpoint (or your edge proxy in front of it)
  url: 'https://rum-collector.example.com/collect',
  apiKey: '<optional-faro-receiver-api-key>',

  app: {
    name: 'my-react-app',
    version: '1.0.0',
    environment: 'production',
  },

  instrumentations: [
    // errors + web vitals + console + sessions
    ...getWebInstrumentations(),

    // OpenTelemetry tracing: auto-instruments fetch/xhr + W3C trace-context propagation
    new TracingInstrumentation(),

    // React Router instrumentation (v6 data router shown; use v7 helper for v7)
    new ReactIntegration({
      router: createReactRouterV6DataOptions({ matchRoutes }),
    }),
  ],

  // Recommended hardening for production:
  // sessionTracking: { enabled: true },
  // beforeSend: (item) => scrubPII(item),  // drop/redact sensitive fields client-side
});
```

```tsx
// src/main.tsx
import './faro'; // <-- first import, before anything else
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { FaroErrorBoundary, withFaroRouterInstrumentation } from '@grafana/faro-react';
import { routes } from './routes';

const router = withFaroRouterInstrumentation(createBrowserRouter(routes));

ReactDOM.createRoot(document.getElementById('root')!).render(
  <FaroErrorBoundary>
    <RouterProvider router={router} />
  </FaroErrorBoundary>,
);
```

```ts
// Manual API anywhere in the app
import { faro } from './faro';
import { LogLevel } from '@grafana/faro-react';

faro.api.pushLog(['checkout started'], { level: LogLevel.INFO });
faro.api.pushError(new Error('payment failed'));
faro.api.pushEvent('add_to_cart', { sku: '123', price: '19.99' });

// Custom span
faro.api.getOTEL()?.trace.getTracer('checkout').startActiveSpan('submit-order', (span) => {
  // ...work...
  span.end();
});
```

> The `FaroErrorBoundary` enriches React component-stack errors; `withFaroRouterInstrumentation` emits an event on every route change. Both are extra to the automatic error/web-vitals capture.

### 2.2 Angular (modern, v2+) — matches your "Angular + JS/TS" stack

There is no dedicated `faro-angular` package; you wire the core SDK via `APP_INITIALIZER` and a custom `ErrorHandler`.

```bash
npm install @grafana/faro-web-sdk @grafana/faro-web-tracing
```

```ts
// src/app/observability/faro.ts
import { initializeFaro, getWebInstrumentations, faro } from '@grafana/faro-web-sdk';
import { TracingInstrumentation } from '@grafana/faro-web-tracing';

export function initFaro(): void {
  initializeFaro({
    url: 'https://rum-collector.example.com/collect',
    apiKey: '<optional-faro-receiver-api-key>',
    app: { name: 'my-angular-app', version: '1.0.0', environment: 'production' },
    instrumentations: [
      ...getWebInstrumentations({ captureConsole: true }),
      new TracingInstrumentation(),
    ],
  });
}

export { faro };
```

```ts
// src/app/observability/faro-error-handler.ts
import { ErrorHandler, Injectable } from '@angular/core';
import { faro } from '@grafana/faro-web-sdk';

@Injectable()
export class FaroErrorHandler implements ErrorHandler {
  handleError(error: unknown): void {
    faro.api.pushError(error instanceof Error ? error : new Error(String(error)));
    console.error(error); // keep default console behavior
  }
}
```

**NgModule wiring** (`app.module.ts`):

```ts
import { APP_INITIALIZER, ErrorHandler, NgModule } from '@angular/core';
import { initFaro } from './observability/faro';
import { FaroErrorHandler } from './observability/faro-error-handler';

@NgModule({
  // declarations / imports ...
  providers: [
    { provide: APP_INITIALIZER, useFactory: () => () => initFaro(), deps: [], multi: true },
    { provide: ErrorHandler, useClass: FaroErrorHandler },
  ],
})
export class AppModule {}
```

**Standalone wiring** (`app.config.ts`, Angular 15+):

```ts
import { ApplicationConfig, APP_INITIALIZER, ErrorHandler } from '@angular/core';
import { initFaro } from './observability/faro';
import { FaroErrorHandler } from './observability/faro-error-handler';

export const appConfig: ApplicationConfig = {
  providers: [
    { provide: APP_INITIALIZER, useFactory: () => () => initFaro(), multi: true },
    { provide: ErrorHandler, useClass: FaroErrorHandler },
  ],
};
```

**Route-change events** (optional):

```ts
import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { faro } from '@grafana/faro-web-sdk';

@Component({ selector: 'app-root', template: '<router-outlet></router-outlet>' })
export class AppComponent {
  constructor(router: Router) {
    router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe((e) => faro.api.pushEvent('route_change', { url: e.urlAfterRedirects }));
  }
}
```

> **Tracing + Zone.js:** Angular relies on Zone.js, so for spans to correlate across async work, configure the OTel `ZoneContextManager` in the `TracingInstrumentation` (`@opentelemetry/context-zone`, matching your Angular Zone.js version). Without it, tracing still works but async context can break.

### 2.3 AngularJS (legacy 1.x) — only if you literally mean AngularJS

> **Heads-up on terminology:** "AngularJS" = the legacy 1.x framework; "Angular" = 2+ (what your earlier "Angular + JS/TS" almost certainly means → use 2.2). This section is for genuine AngularJS 1.x apps, where there's no module integration — you bootstrap Faro globally and hook into AngularJS's `$exceptionHandler` and route events.

Load Faro early (the CDN/IIFE bundle works well here, and it's what you'd inject via nginx):

```html
<script src="https://your-cdn/@grafana/faro-web-sdk.iife.js"></script>
<script>
  window.faro = window.GrafanaFaroWebSdk.initializeFaro({
    url: 'https://rum-collector.example.com/collect',
    app: { name: 'legacy-angularjs-app', version: '1.0.0' },
    instrumentations: window.GrafanaFaroWebSdk.getWebInstrumentations(),
  });
</script>
```

Forward AngularJS errors via an `$exceptionHandler` decorator:

```js
angular.module('myApp').config(['$provide', function ($provide) {
  $provide.decorator('$exceptionHandler', ['$delegate', function ($delegate) {
    return function (exception, cause) {
      try { window.faro.api.pushError(exception); } catch (e) { /* no-op */ }
      $delegate(exception, cause); // preserve default behavior
    };
  }]);
}]);
```

Emit route-change events (ngRoute shown; ui-router uses `$stateChangeSuccess`):

```js
angular.module('myApp').run(['$rootScope', function ($rootScope) {
  $rootScope.$on('$routeChangeSuccess', function (evt, current) {
    var route = (current && current.$$route && current.$$route.originalPath) || location.pathname;
    window.faro.api.pushEvent('route_change', { route: route });
  });
}]);
```
