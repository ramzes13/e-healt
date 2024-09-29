import { Injectable } from '@angular/core';

import { EffectsBase } from '@k5cjs/store';

import { actions } from './routines.actions';
import { HttpService } from './routines.http.service';
import { selectors } from './routines.selectors';
import { Routine } from './routines.type';

@Injectable()
export class Effects extends EffectsBase<Routine> {
  constructor(http: HttpService) {
    super(actions, selectors, http);
  }
}
