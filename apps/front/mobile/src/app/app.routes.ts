import { Route } from '@angular/router';
import { AccountFeatureUsersComponent } from 'libs/account/feature-users/src/lib/account-feature-users.component';

export const appRoutes: Route[] = [
  {
    path: 'store-feature-products',
    loadChildren: () =>
      import('@escola-de-ti/store/feature-products').then(
        (m) => m.StoreFeatureProductsModule
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('@escola-de-ti/account/feature-users').then(
        (m) => m.AccountFeatureUsersModule
      ),
  },
];
