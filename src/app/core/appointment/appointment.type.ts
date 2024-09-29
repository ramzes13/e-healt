import { StateBase } from '@k5cjs/store';

export type StateAppointment = StateBase<Appointment>;

export interface Appointment {
  id: number;
  start: Date;
  duration: number;
  servicesIds: number[];
}
