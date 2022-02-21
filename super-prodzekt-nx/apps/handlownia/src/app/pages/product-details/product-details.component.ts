import { Component } from '@angular/core';
import {
  ProductsService
} from "../../../../../../libs/handlownia/feature/feature-product-displayer/src/lib/services/products.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Product} from "../../../../../../libs/handlownia/feature/feature-product-displayer/src/lib/models/product";
import {Observable} from "rxjs";

@Component({
  selector: 'super-prodzekt-nx-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {

  readonly product$ = this._getProduct();

  constructor(private _productsService: ProductsService, private _activatedRoute: ActivatedRoute) {
  }

  private _getProduct() {
      return this._productsService.getProductById(this._activatedRoute.snapshot.params['id']);
  }


}
