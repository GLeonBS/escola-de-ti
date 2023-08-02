import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

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

  

  onSubmit() {
    if(this.form.valid){
      this.http.post('/api/product', this.form.value)
        .subscribe(() => {
          console.log()
        })
    }
  }
}
