import { Inject, Injectable } from '@angular/core';
// eslint-disable-next-line import/named
import { MonoTypeOperatorFunction, of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';

import { Actions, OnInitEffects, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { actions } from './auth.actions';
import { AuthHttpService } from './auth.http.service';
import { SignInResponse } from './auth.type';
import { PREFIX } from './prefix.token';
import { ApplicationSettings } from '@nativescript/core';

@Injectable()
export class AuthEffects implements OnInitEffects {
  // set initial store for auth
  setStorage$ = createEffect(() => {
    return this._actions.pipe(
      ofType(actions.initEffects),
      map(({ key }) => {
        try {
          const body = JSON.parse(ApplicationSettings.getString(key) || 'null') as SignInResponse;

          if (!body) throw new Error('no data on local storage');

          return actions.initState({ body });
        } catch (error) {
          return actions.initStateError({ error });
        }
      }),
    );
  });

  signIn$ = createEffect(() => {
    return this._actions.pipe(
      ofType(actions.signIn),
      mergeMap(({ body }) =>
        this._auth.signIn(body).pipe(
          this._putTokensInStorage(),
          map((body) => actions.signInSuccess({ body })),
          catchError(({ errorCode: error }: any) => of(actions.signInError({ error }))),
        ),
      ),
    );
  });

  logout$ = createEffect(
    () => {
      return this._actions.pipe(ofType(actions.logout), this._removeTokensFromStorage());
    },
    {
      dispatch: false,
    },
  );

  private _key: string;

  constructor(private _actions: Actions, private _auth: AuthHttpService, @Inject(PREFIX) private _prefix: string) {
    this._key = `${this._prefix}-auth`;
  }

  ngrxOnInitEffects(): Action {
    return actions.initEffects({ key: this._key });
  }

  private _putTokensInStorage(): MonoTypeOperatorFunction<SignInResponse> {
    return tap((credentials) => {
      ApplicationSettings.setString(this._key, JSON.stringify(credentials));
    });
  }

  private _removeTokensFromStorage(): MonoTypeOperatorFunction<SignInResponse> {
    return tap(() => {
      ApplicationSettings.remove(this._key);
    });
  }
}
