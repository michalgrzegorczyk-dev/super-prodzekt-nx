import { createFeatureSelector, createSelector } from '@ngrx/store';
import { User } from '../model/user';
import { AUTH_FEATURE_KEY, State } from './auth.reducer';

// Lookup the 'Auth' feature state managed by NgRx
export const getAuthState = createFeatureSelector<State>(AUTH_FEATURE_KEY);

export const getLoggedUser = createSelector(
  getAuthState,
  (state: State) => state.loggedUser
);

export const isLoginFailed = createSelector(
  getAuthState,
  (state: State) => state.isLoginFailed
);

export const isUserLogged = createSelector(
  getLoggedUser,
  (user: User | undefined) => !!user
);