import { Injectable } from '@angular/core';

import { Options, StoreServiceBase } from '@k5cjs/store';

import { actions } from './appointment.actions';
import { selectors } from './appointment.selectors';
import { Appointment } from './appointment.type';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AppointmentService extends StoreServiceBase<Appointment> {
  constructor() {
    super(actions, selectors);
  }

  override getById<R>(
    options: Options<{ item: Pick<Appointment, 'id'> }, unknown, R>,
  ): Observable<{ item: Appointment }>;
  override getById(options: Options<{ item: Pick<Appointment, 'id'> }>): Observable<{ item: Appointment }> {
    return super.getById(options);
  }
}
