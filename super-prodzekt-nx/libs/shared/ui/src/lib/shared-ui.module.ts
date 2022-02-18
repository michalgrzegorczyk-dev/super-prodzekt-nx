import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarModule } from "./components/navbar/navbar.module";
import { TypicalSuperCardModule } from "./components/typical-super-card/typical-super-card.module";

@NgModule({
  imports: [
    CommonModule,
    NavbarModule,
    TypicalSuperCardModule,
  ],
  exports: [
    NavbarModule,
    TypicalSuperCardModule,
  ],
})
export class SharedUiModule {
}
