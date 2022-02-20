import { User } from './../model/user';
import { createReducer, on, Action } from '@ngrx/store';

import * as AuthActions from './auth.actions';

export const AUTH_FEATURE_KEY = 'auth';

export interface State {
  loggedUser?: User; // which Auth record has been selected
  isLoginFailed: boolean;
}

export interface AuthPartialState {
  readonly [AUTH_FEATURE_KEY]: State;
}

export const initialState: State = {
  loggedUser: undefined,
  isLoginFailed: false,
};

const authReducer = createReducer(
  initialState,
  on(AuthActions.loginSuccess, (state, { user }) => ({
    ...state,
    loggedUser: user,
    isLoginFailed: false,
  })),
  on(AuthActions.loginFailure, (state) => ({ ...state, isLoginFailed: true })),
  on(AuthActions.logoutUser, (state) => ({
    ...state,
    user: undefined,
    isLoginFailed: false,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return authReducer(state, action);
}
