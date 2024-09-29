import { ActionsBase } from '@k5cjs/store';

import { key } from './services.config';
import { Service } from './services.type';

class Actions extends ActionsBase<Service> {}

export const actions = new Actions(key);
