import { reducerBase, stateBase } from '@k5cjs/store';
import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Action, createReducer } from '@ngrx/store';

import { actions } from './services.actions';
import { Service, StateService } from './services.type';

export const adapter: EntityAdapter<Service> = createEntityAdapter<Service>();

const initialState: StateService = adapter.getInitialState({
  ...stateBase(),
});

export function reducer(state: StateService | undefined, action: Action): StateService {
  return createReducer(
    initialState,

    ...reducerBase(adapter, actions),
  )(state, action);
}
