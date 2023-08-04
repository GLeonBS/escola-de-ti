import { Route } from '@angular/router';
import { StoreFeatureProductsComponent } from './store-feature-products.component';
import { StoreFeatueProductsViewComponent } from './store-feature-products-view.component';
import { StoreFeatureProductsChangeComponent } from './store-feature-products-change.component';

export const storeFeatureProductsRoutes: Route[] = [
  {
    path:'new',
    component:StoreFeatureProductsComponent
  },
  {
    path:'view',
    component:StoreFeatueProductsViewComponent
  },
  {
    path:'change',
    component:StoreFeatureProductsChangeComponent
  }
];
