import {Component} from '@angular/core';
import {
  DisplayType
} from "../../../../../../libs/handlownia/feature/feature-product-displayer/src/lib/enums/display-type";

@Component({
  selector: 'super-prodzekt-nx-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  DisplayType = DisplayType;
}
