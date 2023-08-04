import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { Product } from './types/product.type';

@Component({
  selector: 'store-store-feature-products-change',
  templateUrl: './store-feature-products.component.html',
  styleUrls: ['./store-feature-products.component.scss'],
})
export class StoreFeatureProductsChangeComponent implements OnInit {
  constructor(private http: HttpClient, private formBuilder: FormBuilder){
  }


  form : FormGroup = this.formBuilder.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    price:['', Validators.required],
    quantity:['', Validators.required],
  })

  ngOnInit(){
    this.getProducts()
    this.form.get('name')?.setValue(this.product.name);
    this.form.patchValue({name: this.product.name, description: this.product.description, price: this.product.price, quantity: this.product.quantity})
    console.log(this.form)
  }

  id = '64cc3ea833064f4734c2a95e';
  name = "Xiaomi";
  #products = new BehaviorSubject([])
  products$ = this.#products.asObservable()

  product = {} as Product;

  getProducts() {
    this.http.get(`api/product/${this.name}`).subscribe(productFounded => {
      this.product = productFounded as Product
      console.log(this.product);
      
    })
  }

  onSubmit() {
    if(this.form.valid){
      this.http.put(`/api/product/${this.id}`, this.form)
        .subscribe(() => {
          console.log()
        })
    }
  }
}
