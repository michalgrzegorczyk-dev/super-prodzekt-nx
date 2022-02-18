import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'super-prodzekt-nx-typical-super-card',
  templateUrl: './typical-super-card.component.html',
  styleUrls: ['./typical-super-card.component.scss']
})
export class TypicalSuperCardComponent implements OnInit {

  @Input() title = '';

  constructor() { }

  ngOnInit(): void {
  }

}
