import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'super-prodzekt-nx-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  @Input() searchTextHeader = ''

  readonly title = this._generateTitle();

  private _generateTitle() {
    return `Super produtków mamy ${10} i możesz sobie poszukać`;
  }
}
