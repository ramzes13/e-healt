import { reducerBase, stateBase } from '@k5cjs/store';
import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Action, createReducer } from '@ngrx/store';

import { actions } from './routines.actions';
import { Routine, StateRoutine } from './routines.type';

export const adapter: EntityAdapter<Routine> = createEntityAdapter<Routine>();

const initialState: StateRoutine = adapter.getInitialState({
  ...stateBase(),
});

export function reducer(state: StateRoutine | undefined, action: Action): StateRoutine {
  return createReducer(
    initialState,

    ...reducerBase(adapter, actions),
  )(state, action);
}
