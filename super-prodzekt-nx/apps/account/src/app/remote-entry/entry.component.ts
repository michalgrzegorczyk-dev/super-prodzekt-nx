import { Component } from '@angular/core';

@Component({
  selector: 'super-prodzekt-nx-account-entry',
  template: `<div class="remote-entry">
    <h2>account's Remote Entry Component</h2>
  </div>`,
  styles: [
    `
      .remote-entry {
        background-color: #143055;
        color: white;
        padding: 5px;
      }
    `,
  ],
})
export class RemoteEntryComponent {}
