import { ActionsBase } from '@k5cjs/store';

import { key } from './documents.config';
import { Document } from './documents.type';

class Actions extends ActionsBase<Document> {}

export const actions = new Actions(key);
