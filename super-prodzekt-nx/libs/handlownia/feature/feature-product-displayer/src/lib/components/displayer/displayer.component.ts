import {Component, Input} from '@angular/core';
import {DisplayType} from "../../enums/display-type";
import {Product} from "../../models/product";
import {ProductsService} from "../../services/products.service";
import {Observable} from "rxjs";

@Component({
  selector: 'super-prodzekt-nx-displayer',
  templateUrl: './displayer.component.html',
  styleUrls: ['./displayer.component.scss'],
})
export class DisplayerComponent {

  productsToDisplay$: Observable<Product[]> | null = null;

  @Input() set displayType(displayType: DisplayType) {
    this.productsToDisplay$ = this._productService.getProducts(displayType)
  }

  constructor(readonly _productService: ProductsService) {
  }

  onProductClicked() {
  }
}
