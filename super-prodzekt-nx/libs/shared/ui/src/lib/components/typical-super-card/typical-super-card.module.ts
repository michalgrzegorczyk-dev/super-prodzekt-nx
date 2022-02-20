import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TypicalSuperCardComponent} from "./typical-super-card.component";

@NgModule({
  declarations: [
    TypicalSuperCardComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    TypicalSuperCardComponent,
  ]
})
export class TypicalSuperCardModule {
}
