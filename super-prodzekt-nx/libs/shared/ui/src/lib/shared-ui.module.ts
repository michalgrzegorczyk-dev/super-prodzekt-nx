import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarModule } from "./components/navbar/navbar.module";
import { TypicalSuperCardModule } from "./components/typical-super-card/typical-super-card.module";
import {SharedDataAccessUserModule} from "@super-prodzekt-nx/shared/data-access-user";

@NgModule({
  imports: [
    CommonModule,
    NavbarModule,
    TypicalSuperCardModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot(),
  ],
  exports: [
    NavbarModule,
    SharedDataAccessUserModule,
  ],
  declarations: [],
})
export class SharedUiModule {}
