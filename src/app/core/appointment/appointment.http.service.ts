import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

import { ActionInit, HttpServiceBase, Params } from '@k5cjs/store';

import { Appointment } from './appointment.type';
import { AtLeastDeep } from '@k5cjs/types';
import { Service } from '../services';
import { HOST } from '../env';

@Injectable({ providedIn: 'root' })
export class HttpService extends HttpServiceBase<Appointment> {
  constructor(private _http: HttpClient) {
    super();
  }

  getByQuery(): Observable<{ items: Appointment[]; config?: Params | undefined; before?: Params | undefined }> {
    return this._http.get<Appointment[]>(`${HOST}/invitro/appointments`).pipe(map((items) => ({ items })));
  }

  getById(
    options: ActionInit<{ item: Pick<Appointment, 'id'> }, any, any>,
  ): Observable<{ item: Appointment; config?: Params | undefined; before?: Params | undefined }> {
    return this._http
      .get<Appointment & { services: Service[] }>(`${HOST}/invitro/appointments/${options.params.item.id}`)
      .pipe(
        map(({ services, ...rest }) => ({
          item: { id: options.params.item.id, ...rest, servicesIds: services.map(({ id }) => id) },
          before: { services: services },
        })),
      );
  }

  create(
    options: ActionInit<{ item: Omit<Appointment, 'id'> }, any, any>,
  ): Observable<{ item: Appointment; config?: Params | undefined; before?: Params | undefined }> {
    throw new Error('Method not implemented.');
  }

  update(
    options: ActionInit<{ item: AtLeastDeep<Appointment, 'id'> }, any, any>,
  ): Observable<{ item: Appointment; config?: Params | undefined; before?: Params | undefined }> {
    throw new Error('Method not implemented.');
  }

  updateAll(
    options: ActionInit<{ items: AtLeastDeep<Appointment, 'id'>[] }, any, any>,
  ): Observable<{ items: Appointment[]; config?: Params | undefined; before?: Params | undefined }> {
    throw new Error('Method not implemented.');
  }

  delete(
    options: ActionInit<{ item: AtLeastDeep<Appointment, 'id'> }, any, any>,
  ): Observable<{ item: Appointment; config?: Params | undefined; before?: Params | undefined }> {
    throw new Error('Method not implemented.');
  }
}
