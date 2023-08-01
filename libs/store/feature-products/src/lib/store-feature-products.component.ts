import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'store-store-feature-products',
  templateUrl: './store-feature-products.component.html',
  styleUrls: ['./store-feature-products.component.scss'],
})
export class StoreFeatureProductsComponent {

  constructor(private http: HttpClient){}

  form = new FormGroup({
    name: new FormControl(),
    description: new FormControl(),
    price:new FormControl(),
    quantity:new FormControl(),
  })

  products$: any = this.http.get('api/product').subscribe(prod => this.products$ = prod)

  onSubmit() {
    if(this.form.valid){
      this.http.post('/api/product', this.form.value)
        .subscribe(console.log)
    }
  }
}
