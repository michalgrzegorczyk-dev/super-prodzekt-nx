import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from "../../../models/product";

@Component({
  selector: 'super-prodzekt-nx-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailsComponent {

  @Input() product: Product = {
    id: -1,
    header: 'header',
    description: 'description',
    imageUrl: 'imageUrl',
    isPromoted: false,
  };

  @Output() productClicked = new EventEmitter<void>();

  openProductDetails() {
    this.productClicked.emit();
  }
}
