import { reducerBase, stateBase } from '@k5cjs/store';
import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Action, createReducer } from '@ngrx/store';

import { actions } from './appointment.actions';
import { Appointment, StateAppointment } from './appointment.type';

export const adapter: EntityAdapter<Appointment> = createEntityAdapter<Appointment>();

const initialState: StateAppointment = adapter.getInitialState({
  ...stateBase(),
});

export function reducer(state: StateAppointment | undefined, action: Action): StateAppointment {
  return createReducer(
    initialState,

    ...reducerBase(adapter, actions),
  )(state, action);
}
