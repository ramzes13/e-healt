import { ActionsBase } from '@k5cjs/store';

import { key } from './routines.config';
import { Routine } from './routines.type';

class Actions extends ActionsBase<Routine> {}

export const actions = new Actions(key);
