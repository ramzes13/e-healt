import { Injectable } from '@angular/core';

import { EffectsBase } from '@k5cjs/store';

import { actions } from './documents.actions';
import { HttpService } from './documents.http.service';
import { selectors } from './documents.selectors';
import { Document } from './documents.type';

@Injectable()
export class Effects extends EffectsBase<Document> {
  constructor(http: HttpService) {
    super(actions, selectors, http);
  }
}
