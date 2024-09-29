import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { Observable, iif, of } from 'rxjs';
import { distinctUntilChanged, filter, first, map, switchMap } from 'rxjs/operators';

import { MemoizedSelector, Store } from '@ngrx/store';

import * as selectors from './params.selectors';
import { Param, QueryParam, RouterState } from './params.types';

@Injectable()
export class ParamsService {
  // eslint-disable-next-line @ngrx/use-consistent-global-store-name, @ngrx/no-typed-global-store
  constructor(private _store: Store<RouterState>) {}

  params(): Observable<Params>;
  params(params: Param): Observable<string>;
  params(params: Param, skipUndefined?: true): Observable<string>;
  params(params: Param, skipUndefined: false): Observable<string | undefined>;
  params(params: Param[], skipUndefined?: true): Observable<string[]>;
  params(params: Param[], skipUndefined: false): Observable<(string | undefined)[]>;
  params(
    params?: Param | Param[],
    skipUndefined?: boolean,
  ): Observable<Params | string | undefined | (string | undefined)[]> {
    return this._genericParams(selectors.selectParams, params, skipUndefined).pipe(first());
  }

  paramsChanges(): Observable<Params>;
  paramsChanges(params: Param, skipUndefined?: true): Observable<string>;
  paramsChanges(params: Param, skipUndefined: false): Observable<string | undefined>;
  paramsChanges(params: Param[], skipUndefined?: true): Observable<string[]>;
  paramsChanges(params: Param[], skipUndefined: false): Observable<(string | undefined)[]>;
  paramsChanges(
    params?: Param | Param[],
    skipUndefined?: boolean,
  ): Observable<Params | string | undefined | (string | undefined)[]> {
    return this._genericParams(selectors.selectParams, params, skipUndefined);
  }

  queryParams(): Observable<Params>;
  queryParams<T = string>(params: QueryParam, skipUndefined?: true): Observable<T>;
  queryParams<T = string>(params: QueryParam, skipUndefined: false): Observable<T | undefined>;
  queryParams<T = string>(params: QueryParam[], skipUndefined?: true): Observable<T[]>;
  queryParams<T = string>(params: QueryParam[], skipUndefined: false): Observable<(T | undefined)[]>;
  queryParams(
    params?: QueryParam | QueryParam[],
    skipUndefined?: boolean,
  ): Observable<Params | string | undefined | (string | undefined)[]> {
    return this._genericParams(selectors.selectQueryParams, params, skipUndefined).pipe(first());
  }

  queryParamsChanges(): Observable<Params>;
  queryParamsChanges(params: QueryParam, skipUndefined?: true): Observable<string>;
  queryParamsChanges(params: QueryParam, skipUndefined: false): Observable<string | undefined>;
  queryParamsChanges(params: QueryParam[], skipUndefined?: true): Observable<string[]>;
  queryParamsChanges(params: QueryParam[], skipUndefined: false): Observable<(string | undefined)[]>;
  queryParamsChanges(
    params?: QueryParam | QueryParam[],
    skipUndefined?: boolean,
  ): Observable<Params | string | undefined | (string | undefined)[]> {
    return this._genericParams(selectors.selectQueryParams, params, skipUndefined);
  }

  private _genericParams(
    selector: MemoizedSelector<RouterState, Params>,
    // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
    params: undefined | Param | QueryParam | (Param | QueryParam)[],
    skipUndefined = true,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ): Observable<Params | string | undefined | (string | undefined)[]> {
    return this._store.select(selector).pipe(
      map((allParams) => {
        if (!params) return allParams;

        if (Array.isArray(params)) return params.map((param) => allParams[param] as string);

        return allParams[params] as string;
      }),
      distinctUntilChanged((a, b) => JSON.stringify(a) === JSON.stringify(b)),
      switchMap((params) =>
        iif(
          () => skipUndefined,
          /**
           * If skipUndefined is true, we only return the params if they are not undefined.
           */
          of(params).pipe(filter(this._checkIsNotUndefined.bind(this))),
          of(params),
        ),
      ),
    );
  }

  private _checkIsNotUndefined(params: Params | string | undefined | (string | undefined)[]): boolean {
    if (Array.isArray(params)) return params.every((param) => param !== undefined);

    return params !== undefined;
  }
}
