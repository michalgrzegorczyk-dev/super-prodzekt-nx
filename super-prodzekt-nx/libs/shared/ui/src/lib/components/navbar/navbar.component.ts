import { AuthFacade } from './../../../../../data-access-user/src/lib/state/auth.facade';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'super-prodzekt-nx-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  constructor(private readonly store: AuthFacade) {}

  isUserLogged$ = this.store.isUserLogged$;
  loggedUser = this.store.loggedUser$;
  
  onLogout() {
    this.store.logoutUser();
  }
}
