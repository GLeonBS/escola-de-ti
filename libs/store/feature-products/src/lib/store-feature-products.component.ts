import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'store-store-feature-products',
  templateUrl: './store-feature-products.component.html',
  styleUrls: ['./store-feature-products.component.scss'],
})
export class StoreFeatureProductsComponent {
  form = new FormGroup({
    name: new FormControl(),
    description: new FormControl(),
    price:new FormControl(),
    quantity:new FormControl(),
  })

  onSubmit() {
    
  }
}
