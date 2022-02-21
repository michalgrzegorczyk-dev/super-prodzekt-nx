import {Component, OnInit} from '@angular/core';
import {
  DisplayType
} from "../../../../../../libs/handlownia/feature/feature-product-displayer/src/lib/enums/display-type";

@Component({
  selector: 'super-prodzekt-nx-product-details-wrapper',
  templateUrl: './product-details-wrapper.component.html',
  styleUrls: ['./product-details-wrapper.component.scss']
})
export class ProductDetailsWrapperComponent {
  readonly DisplayType = DisplayType;
}
