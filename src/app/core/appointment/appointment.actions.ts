import { ActionsBase } from '@k5cjs/store';

import { key } from './appointment.config';
import { Appointment } from './appointment.type';

class Actions extends ActionsBase<Appointment> {}

export const actions = new Actions(key);
