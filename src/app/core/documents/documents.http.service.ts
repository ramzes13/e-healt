import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

import { ActionInit, HttpServiceBase, Params } from '@k5cjs/store';

import { Document } from './documents.type';
import { AtLeastDeep } from '@k5cjs/types';
import { HOST } from '../env';

@Injectable({ providedIn: 'root' })
export class HttpService extends HttpServiceBase<Document> {
  constructor(private _http: HttpClient) {
    super();
  }

  getByQuery(): Observable<{ items: Document[]; config?: Params | undefined; before?: Params | undefined }> {
    console.log('getByQuery');
    
    return this._http.get<Document[]>(`${HOST}/documents`).pipe(map((items) => ({ items })));
  }

  getById(
    options: ActionInit<{ item: Pick<Document, 'id'> }, any, any>,
  ): Observable<{ item: Document; config?: Params | undefined; before?: Params | undefined }> {
    throw new Error('Method not implemented.');
  }

  create(
    options: ActionInit<{ item: Omit<Document, 'id'> }, any, any>,
  ): Observable<{ item: Document; config?: Params | undefined; before?: Params | undefined }> {
    throw new Error('Method not implemented.');
  }

  update(
    options: ActionInit<{ item: AtLeastDeep<Document, 'id'> }, any, any>,
  ): Observable<{ item: Document; config?: Params | undefined; before?: Params | undefined }> {
    throw new Error('Method not implemented.');
  }

  updateAll(
    options: ActionInit<{ items: AtLeastDeep<Document, 'id'>[] }, any, any>,
  ): Observable<{ items: Document[]; config?: Params | undefined; before?: Params | undefined }> {
    throw new Error('Method not implemented.');
  }

  delete(
    options: ActionInit<{ item: AtLeastDeep<Document, 'id'> }, any, any>,
  ): Observable<{ item: Document; config?: Params | undefined; before?: Params | undefined }> {
    throw new Error('Method not implemented.');
  }
}
