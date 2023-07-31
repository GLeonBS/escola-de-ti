import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { storeFeatureProductsRoutes } from './store-feature-products.routes';
import { StoreFeatureProductsComponent } from './store-feature-products.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(storeFeatureProductsRoutes),
    MatToolbarModule, 
    MatIconModule, 
    MatButtonModule, 
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
    ],
  declarations: [StoreFeatureProductsComponent],
})
export class StoreFeatureProductsModule { }
