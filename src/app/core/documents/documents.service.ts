import { Injectable } from '@angular/core';

import { Options, StoreServiceBase } from '@k5cjs/store';

import { actions } from './documents.actions';
import { selectors } from './documents.selectors';
import { Document } from './documents.type';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DocumentService extends StoreServiceBase<Document> {
  constructor() {
    super(actions, selectors);
  }

  override getById<R>(
    options: Options<{ item: Pick<Document, 'id'> }, unknown, R>,
  ): Observable<{ item: Document }>;
  override getById(options: Options<{ item: Pick<Document, 'id'> }>): Observable<{ item: Document }> {
    return super.getById(options);
  }
}
