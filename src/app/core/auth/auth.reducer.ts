import { Action, MetaReducer, createReducer, on } from '@ngrx/store';

import { actions } from './auth.actions';
import { State } from './auth.type';

const initialState: State = {
  isAuthenticated: false,
  isLoading: false,
  accessToken: '',
  expiresIn: 0,
  refreshExpiresIn: 0,
  refreshToken: '',
  tokenType: '',
  error: null,
  user: {},
};

export const userReducer = createReducer(
  initialState,

  on(actions.logout, (): State => initialState),

  on(
    actions.signIn,
    (state): State => ({
      ...state,
      isLoading: true,
      error: null,
    }),
  ),

  on(
    actions.signInError,
    (state, { error }): State => ({
      ...state,
      isLoading: false,
      error,
      isAuthenticated: false,
    }),
  ),

  on(
    actions.initState,
    actions.signInSuccess,
    (state, { body }): State => ({
      ...state,
      ...body,
      isLoading: false,
      error: null,
      isAuthenticated: true,
    }),
  ),
);

export function reducer(state: State | undefined, action: Action): State {
  return userReducer(state, action);
}

export const metaReducers: MetaReducer<State>[] = [];
