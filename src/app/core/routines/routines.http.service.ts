import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

import { ActionInit, HttpServiceBase, Params } from '@k5cjs/store';

import { Routine } from './routines.type';
import { AtLeastDeep } from '@k5cjs/types';
import { HOST } from '../env';

@Injectable({ providedIn: 'root' })
export class HttpService extends HttpServiceBase<Routine> {
  constructor(private _http: HttpClient) {
    super();
  }

  getByQuery(): Observable<{ items: Routine[]; config?: Params | undefined; before?: Params | undefined }> {
    return this._http.get<Routine[]>(`${HOST}/invitro/services`).pipe(map((items) => ({ items })));
  }

  getById(
    options: ActionInit<{ item: Pick<Routine, 'id'> }, any, any>,
  ): Observable<{ item: Routine; config?: Params | undefined; before?: Params | undefined }> {
    return this._http
      .get<Routine>(`${HOST}/invitro/services/${options.params.item.id}`)
      .pipe(map((item) => ({ item: { ...item, id: options.params.item.id } })));
  }

  create(
    options: ActionInit<{ item: Omit<Routine, 'id'> }, any, any>,
  ): Observable<{ item: Routine; config?: Params | undefined; before?: Params | undefined }> {
    throw new Error('Method not implemented.');
  }

  update(
    options: ActionInit<{ item: AtLeastDeep<Routine, 'id'> }, any, any>,
  ): Observable<{ item: Routine; config?: Params | undefined; before?: Params | undefined }> {
    throw new Error('Method not implemented.');
  }

  updateAll(
    options: ActionInit<{ items: AtLeastDeep<Routine, 'id'>[] }, any, any>,
  ): Observable<{ items: Routine[]; config?: Params | undefined; before?: Params | undefined }> {
    throw new Error('Method not implemented.');
  }

  delete(
    options: ActionInit<{ item: AtLeastDeep<Routine, 'id'> }, any, any>,
  ): Observable<{ item: Routine; config?: Params | undefined; before?: Params | undefined }> {
    throw new Error('Method not implemented.');
  }
}
