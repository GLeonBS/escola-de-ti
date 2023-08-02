import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { Product } from './types/product.type';
import { __values } from 'tslib';

@Component({
  selector: 'store-store-featue-products-view',
  templateUrl: './store-feature-products-view.component.html',
  styleUrls: ['./store-feature-products.component.scss'],
})
export class StoreFeatueProductsViewComponent {
  constructor(private http: HttpClient) {
    this.ngOnInit()
  }

  ngOnInit(){
    this.getProducts();
  }
  #products = new BehaviorSubject([])
  products$ = this.#products.asObservable()

  products: Product[] = []

  getProducts() {
    this.http.get('api/product').subscribe(productsFounded => {
      this.products = productsFounded as Product[]
    })
  }

}
