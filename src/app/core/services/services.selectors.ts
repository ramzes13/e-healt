import { SelectorsBase } from '@k5cjs/store';

import { key } from './services.config';
import { adapter } from './services.reducer';
import { Service } from './services.type';

class Selectors extends SelectorsBase<Service> {}

export const selectors = new Selectors(key, adapter);
