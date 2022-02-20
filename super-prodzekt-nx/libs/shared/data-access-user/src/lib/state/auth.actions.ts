import { User } from './../model/user';
import { createAction, props } from '@ngrx/store';
import { UserCredential } from '../model/user';

export const checkCredentials = createAction(
  '[Auth] Check credentails',
  props<{ credentials: UserCredential }>()
);

export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<{ user: User }>()
);

export const loginFailure = createAction('[Auth] Login Failure');

export const logoutUser = createAction('[Auth] Logout User');