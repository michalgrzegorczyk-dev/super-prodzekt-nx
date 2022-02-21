import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductDetailsComponent} from './product-details.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    ProductDetailsComponent,
  ],
  exports: [
    ProductDetailsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
})
export class ProductDetailsModule {
}
