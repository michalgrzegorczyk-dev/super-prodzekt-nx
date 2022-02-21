import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {RemoteEntryComponent} from './entry.component';
import {MainPageModule} from "../pages/main-page/main-page.module";
import {ProductDetailsComponent} from "../pages/product-details-wrapper/product-details/product-details.component";
import {ProductDetailsWrapperComponent} from "../pages/product-details-wrapper/product-details-wrapper.component";
import {ProductDetailsWrapperModule} from "../pages/product-details-wrapper/product-details-wrapper.module";

@NgModule({
  declarations: [
    RemoteEntryComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: RemoteEntryComponent,
      },
      {
        path: 'details/:id',
        component: ProductDetailsWrapperComponent,
      },
    ]),
    MainPageModule,
    ProductDetailsWrapperModule
  ],
  providers: [],
})
export class RemoteEntryModule {
}
