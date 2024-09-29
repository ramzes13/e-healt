import { reducerBase, stateBase } from '@k5cjs/store';
import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Action, createReducer } from '@ngrx/store';

import { actions } from './documents.actions';
import { Document, StateDocument } from './documents.type';

export const adapter: EntityAdapter<Document> = createEntityAdapter<Document>();

const initialState: StateDocument = adapter.getInitialState({
  ...stateBase(),
});

export function reducer(state: StateDocument | undefined, action: Action): StateDocument {
  return createReducer(
    initialState,

    ...reducerBase(adapter, actions),
  )(state, action);
}
