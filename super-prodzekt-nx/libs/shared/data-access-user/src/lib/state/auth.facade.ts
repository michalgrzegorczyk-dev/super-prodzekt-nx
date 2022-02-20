import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as AuthActions from './auth.actions';
import * as AuthSelectors from './auth.selectors';

@Injectable()
export class AuthFacade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loggedUser$ = this.store.pipe(select(AuthSelectors.getLoggedUser));
  isLoginFailed$ = this.store.pipe(select(AuthSelectors.isLoginFailed));
  isUserLogged$ = this.store.pipe(select(AuthSelectors.isUserLogged));

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  checkCredentials(email: string, password: string) {
    this.store.dispatch(
      AuthActions.checkCredentials({ credentials: { email, password } })
    );
  }

  logoutUser() {
    this.store.dispatch(AuthActions.logoutUser());
  }
}
