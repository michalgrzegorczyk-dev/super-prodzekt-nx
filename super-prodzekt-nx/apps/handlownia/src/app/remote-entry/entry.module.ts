import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RemoteEntryComponent } from './entry.component';
import {MainPageModule} from "../pages/main-page/main-page.module";
import {ProductDetailsComponent} from "../pages/product-details/product-details.component";

@NgModule({
  declarations: [RemoteEntryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: RemoteEntryComponent,
      },
      {
        path: 'details/:id',
        component: ProductDetailsComponent,
      },
    ]),
    MainPageModule,
  ],
  providers: [],
})
export class RemoteEntryModule {}
