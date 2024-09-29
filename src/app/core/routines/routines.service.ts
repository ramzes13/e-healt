import { Injectable } from '@angular/core';

import { StoreServiceBase } from '@k5cjs/store';

import { actions } from './routines.actions';
import { selectors } from './routines.selectors';
import { Routine } from './routines.type';

@Injectable({ providedIn: 'root' })
export class RoutinesService extends StoreServiceBase<Routine> {
  constructor() {
    super(actions, selectors);
  }
}
