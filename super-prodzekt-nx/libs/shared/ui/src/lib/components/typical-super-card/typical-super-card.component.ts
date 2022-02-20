import {Component, Input} from '@angular/core';

@Component({
  selector: 'super-prodzekt-nx-typical-super-card',
  templateUrl: './typical-super-card.component.html',
  styleUrls: ['./typical-super-card.component.scss'],
})
export class TypicalSuperCardComponent {
  @Input() title = '';
}
