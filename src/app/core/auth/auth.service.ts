import { Injectable } from '@angular/core';
import { Observable, first, map } from 'rxjs';

import { Actions, ofType } from '@ngrx/effects';
import { Action, ActionCreator, Store } from '@ngrx/store';

import { actions } from './auth.actions';
import * as selectors from './auth.selectors';
import { SignIn, State, User } from './auth.type';

@Injectable()
export class AuthService {
  all: Observable<State>;
  isLoading: Observable<boolean>;

  constructor(private _store: Store<State>, private _actions: Actions) {
    this.all = this._store.select(selectors.all);
    this.isLoading = this._store.select(selectors.isLoading);
  }

  /**
   * @deprecated Use `_dispatch` instead
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  protected _finishedAction(...finishedActions: ActionCreator<string, (props: any) => Action>[]): Observable<boolean> {
    return this._actions.pipe(
      ofType(...finishedActions),
      map(({ type }) => type === finishedActions[0].type),
      first(),
    );
  }

  get isAuthenticated(): Observable<boolean> {
    return this._store.select(selectors.isAuthenticated);
  }

  get token(): Observable<string | null> {
    return this._store.select(selectors.token);
  }

  get error(): Observable<string | null> {
    return this._store.select(selectors.error);
  }

  get user(): Observable<User> {
    return this._store.select(selectors.user);
  }

  signIn(body: SignIn): Observable<boolean> {
    this._store.dispatch(actions.signIn({ body }));

    return this._finishedAction(actions.signInSuccess, actions.signInError);
  }

  logout(): void {
    this._store.dispatch(actions.logout());
  }
}
