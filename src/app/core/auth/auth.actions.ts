import { createAction, props } from '@ngrx/store';

import { storeKey } from './auth.config';
import { SignIn, SignInResponse } from './auth.type';
import { logoutActions } from '../store/logout.actions';

const type = (action: string): string => `[${storeKey.toLocaleUpperCase()}] ${action}`;

class Actions {
  initEffects = createAction(type('init effects'), props<{ key: string }>());

  initState = createAction(type('init state'), props<{ body: SignInResponse }>());
  initStateError = createAction(type('init state error'), props<{ error: unknown }>());

  // eslint-disable-next-line @ngrx/prefer-inline-action-props
  signIn = createAction(type('sign-in'), props<{ body: SignIn }>());
  signInSuccess = createAction(type('sign-in success'), props<{ body: SignInResponse }>());
  signInError = createAction(type('sign-in error'), props<{ error: string }>());

  logout = logoutActions.logout;
}

export const actions = new Actions();
