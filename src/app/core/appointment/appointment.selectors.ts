import { SelectorsBase } from '@k5cjs/store';

import { key } from './appointment.config';
import { adapter } from './appointment.reducer';
import { Appointment } from './appointment.type';

class Selectors extends SelectorsBase<Appointment> {}

export const selectors = new Selectors(key, adapter);
