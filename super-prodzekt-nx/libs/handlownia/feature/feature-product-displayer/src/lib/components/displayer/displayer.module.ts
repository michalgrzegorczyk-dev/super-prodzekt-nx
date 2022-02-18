import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DisplayerComponent} from "./displayer.component";
import {ProductDetailsModule} from "./product-details/product-details.module";

@NgModule({
  imports: [
    CommonModule,
    ProductDetailsModule,
  ],
  declarations: [
    DisplayerComponent,
  ],
  exports: [
    DisplayerComponent
  ],
})
export class DisplayerModule {
}
