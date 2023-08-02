import { Route } from '@angular/router';
import { StoreFeatureProductsComponent } from './store-feature-products.component';
import { StoreFeatueProductsViewComponent } from './store-feature-products-view.component';

export const storeFeatureProductsRoutes: Route[] = [
  {
    path:'new',
    component:StoreFeatureProductsComponent
  },
  {
    path:'view',
    component:StoreFeatueProductsViewComponent
  }
];
