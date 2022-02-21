import { Component } from '@angular/core';
import {
  ProductsService
} from "../../../../../../../libs/handlownia/feature/feature-product-displayer/src/lib/services/products.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Product} from "../../../../../../../libs/handlownia/feature/feature-product-displayer/src/lib/models/product";
import {Observable} from "rxjs";

const PARAM_ID = 'id'

@Component({
  selector: 'super-prodzekt-nx-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {

  readonly product$: Observable<Product | undefined> = this._getProduct();

  constructor(readonly _productsService: ProductsService, readonly _activatedRoute: ActivatedRoute) {
  }

  private _getProduct() {
      return this._productsService.getProductById(this._activatedRoute.snapshot.params[PARAM_ID]);
  }
}
