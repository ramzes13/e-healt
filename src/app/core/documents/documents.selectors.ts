import { SelectorsBase } from '@k5cjs/store';

import { key } from './documents.config';
import { adapter } from './documents.reducer';
import { Document } from './documents.type';

class Selectors extends SelectorsBase<Document> {}

export const selectors = new Selectors(key, adapter);
