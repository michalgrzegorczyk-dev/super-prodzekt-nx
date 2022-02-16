import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import {SharedUiModule} from "@super-prodzekt-nx/shared/ui";
// import {NavbarModule} from "../../../../../../libs/shared/ui/src/lib/components/navbar/navbar.module";



@NgModule({
  declarations: [
    MainPageComponent
  ],
  exports: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    SharedUiModule
  ]
})
export class MainPageModule { }
