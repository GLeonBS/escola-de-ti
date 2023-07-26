import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'account-feature-users',
    loadChildren: () =>
      import('@escola-de-ti/account/feature-users').then(
        (m) => m.AccountFeatureUsersModule
      ),
  },
];
