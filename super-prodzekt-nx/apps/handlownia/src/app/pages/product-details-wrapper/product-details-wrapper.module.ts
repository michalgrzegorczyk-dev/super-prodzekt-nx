import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductDetailsWrapperComponent} from './product-details-wrapper.component';
import {ProductDetailsModule} from "./product-details/product-details.module";
import {TypicalSuperCardModule} from "@super-prodzekt-nx/shared/ui";
import {DisplayerModule} from "@super-prodzekt-nx/handlownia/feature/feature-product-displayer";

@NgModule({
  declarations: [
    ProductDetailsWrapperComponent,
  ],
  imports: [
    CommonModule,
    ProductDetailsModule,
    TypicalSuperCardModule,
    DisplayerModule,
  ],
})
export class ProductDetailsWrapperModule {
}
