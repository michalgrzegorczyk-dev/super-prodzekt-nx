import { Router } from '@angular/router';
import { User } from './../model/user';
import { UserService } from '@super-prodzekt-nx/shared/data-access-user';
import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';

import * as AuthActions from './auth.actions';
import { mergeMap, map, tap } from 'rxjs';

@Injectable()
export class AuthEffects {
  checkCredentials$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.checkCredentials),
      mergeMap(({ credentials }) =>
        this.userService
          .checkCredentials(credentials.email, credentials.password)
          .pipe(
            map((user: User | undefined) =>
              !!user
                ? AuthActions.loginSuccess({ user })
                : AuthActions.loginFailure()
            )
          )
      )
    )
  );

  redirectToHomePage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.loginSuccess),
        tap(() => {
          this.router.navigateByUrl('/');
        })
      ),
    { dispatch: false }
  );

  constructor(
    private readonly actions$: Actions,
    private readonly userService: UserService,
    private readonly router: Router
  ) {}
}
