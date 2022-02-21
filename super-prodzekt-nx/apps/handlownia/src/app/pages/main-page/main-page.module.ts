import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainPageComponent} from './main-page.component';
import {SharedUiModule} from "@super-prodzekt-nx/shared/ui";
import {
  SearchModule
} from "../../../../../../libs/handlownia/feature/feature-search/src/lib/components/search/search.module";
import { DisplayerModule } from "@super-prodzekt-nx/handlownia/feature/feature-product-displayer";
import {
  TypicalSuperCardModule
} from "@super-prodzekt-nx/shared/ui";

@NgModule({
  imports: [
    CommonModule,
    SharedUiModule,
    SearchModule,
    DisplayerModule,
    TypicalSuperCardModule,
  ],
  declarations: [
    MainPageComponent,
  ],
  exports: [
    MainPageComponent,
  ],
})
export class MainPageModule {
}
