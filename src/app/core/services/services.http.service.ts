import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ActionInit, HttpServiceBase, Params } from '@k5cjs/store';

import { Service } from './services.type';
import { AtLeastDeep } from '@k5cjs/types';

@Injectable({ providedIn: 'root' })
export class HttpService extends HttpServiceBase<Service> {
  constructor(private _http: HttpClient) {
    super();
  }

  getByQuery(): Observable<{ items: Service[]; config?: Params | undefined; before?: Params | undefined }> {
    throw new Error('Method not implemented.');
  }

  getById(
    options: ActionInit<{ item: Pick<Service, 'id'> }, any, any>,
  ): Observable<{ item: Service; config?: Params | undefined; before?: Params | undefined }> {
    throw new Error('Method not implemented.');
  }

  create(
    options: ActionInit<{ item: Omit<Service, 'id'> }, any, any>,
  ): Observable<{ item: Service; config?: Params | undefined; before?: Params | undefined }> {
    throw new Error('Method not implemented.');
  }

  update(
    options: ActionInit<{ item: AtLeastDeep<Service, 'id'> }, any, any>,
  ): Observable<{ item: Service; config?: Params | undefined; before?: Params | undefined }> {
    throw new Error('Method not implemented.');
  }

  updateAll(
    options: ActionInit<{ items: AtLeastDeep<Service, 'id'>[] }, any, any>,
  ): Observable<{ items: Service[]; config?: Params | undefined; before?: Params | undefined }> {
    throw new Error('Method not implemented.');
  }

  delete(
    options: ActionInit<{ item: AtLeastDeep<Service, 'id'> }, any, any>,
  ): Observable<{ item: Service; config?: Params | undefined; before?: Params | undefined }> {
    throw new Error('Method not implemented.');
  }
}
