import { StateBase } from '@k5cjs/store';

export type StateRoutine = StateBase<Routine>;

export interface Routine {
  id: number;
  code: string;
  name: string;
  // 'Regular'
  type: string;
  isActive: boolean;
  isAvailableOnline: boolean;
  groupId: number;
  groupName: string;
  topLevelGroupName: string;
  createdOn: Date;
  updatedOn: Date;
}
