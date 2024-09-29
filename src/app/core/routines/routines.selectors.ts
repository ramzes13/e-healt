import { SelectorsBase } from '@k5cjs/store';

import { key } from './routines.config';
import { adapter } from './routines.reducer';
import { Routine } from './routines.type';

class Selectors extends SelectorsBase<Routine> {}

export const selectors = new Selectors(key, adapter);
