import { Injectable } from '@angular/core';

import { EffectsBase } from '@k5cjs/store';

import { actions } from './services.actions';
import { HttpService } from './services.http.service';
import { selectors } from './services.selectors';
import { Service } from './services.type';

@Injectable()
export class Effects extends EffectsBase<Service> {
  constructor(http: HttpService) {
    super(actions, selectors, http);
  }
}
