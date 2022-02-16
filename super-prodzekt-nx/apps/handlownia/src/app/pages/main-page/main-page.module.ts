import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import {NavbarModule} from "../../../../../../libs/shared/ui/src/lib/components/navbar/navbar.module";



@NgModule({
  declarations: [
    MainPageComponent
  ],
  exports: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    NavbarModule
  ]
})
export class MainPageModule { }
