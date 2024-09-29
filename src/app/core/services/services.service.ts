import { Injectable } from '@angular/core';

import { StoreServiceBase } from '@k5cjs/store';

import { actions } from './services.actions';
import { selectors } from './services.selectors';
import { Service } from './services.type';

@Injectable({ providedIn: 'root' })
export class ServicesService extends StoreServiceBase<Service> {
  constructor() {
    super(actions, selectors);
  }
}
