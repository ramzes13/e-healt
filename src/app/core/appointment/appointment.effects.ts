import { Injectable } from '@angular/core';

import { EffectsBase } from '@k5cjs/store';

import { actions } from './appointment.actions';
import { HttpService } from './appointment.http.service';
import { selectors } from './appointment.selectors';
import { Appointment } from './appointment.type';

@Injectable()
export class Effects extends EffectsBase<Appointment> {
  constructor(http: HttpService) {
    super(actions, selectors, http);
  }
}
