import { StateBase } from '@k5cjs/store';

export type StateService = StateBase<Service>;

export interface Service {
  id: number;
  payerId: number;
  routineId: number;
  isBillable: boolean;
  unitPrice: number;
  quantity: number;
  discount: number;
  deductible: number;
  value: number;
  settledAmoutPerson: number;
  settledAmoutCompany: number;
}
