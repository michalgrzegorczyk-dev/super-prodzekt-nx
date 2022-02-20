import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedDataAccessUserModule } from './../../../data-access-user/src/lib/shared-data-access-user.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarModule } from './components/navbar/navbar.module';

@NgModule({
  imports: [
    CommonModule,
    NavbarModule,
    SharedDataAccessUserModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
  ],
  declarations: [],
  exports: [NavbarModule],
})
export class SharedUiModule {}
