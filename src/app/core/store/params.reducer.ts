import { Action, ActionReducer } from '@ngrx/store';

import { State } from './global-store.type';
import { paramsActions } from './params.actions';

export function paramsResetMetaReducer(reducer: ActionReducer<State>): ActionReducer<State> {
  return (state: State | undefined, action: Action): State => {
    if (action.type === paramsActions.reset.type) {
      return reducer({ params: state!.params }, action);
    }

    return reducer(state, action);
  };
}
