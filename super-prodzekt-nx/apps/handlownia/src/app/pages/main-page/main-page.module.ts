import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainPageComponent} from './main-page.component';
import {SharedUiModule} from "@super-prodzekt-nx/shared/ui";
import {
  SearchModule
} from "../../../../../../libs/handlownia/feature/feature-search/src/lib/components/search/search.module";
import {
  DisplayerModule
} from "../../../../../../libs/handlownia/feature/feature-product-displayer/src/lib/components/displayer/displayer.module";
import {
  TypicalSuperCardModule
} from "../../../../../../libs/shared/ui/src/lib/components/typical-super-card/typical-super-card.module";

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
