import { Action, ActionReducer } from '@ngrx/store';

import { State } from './global-store.type';
import { logoutActions } from './logout.actions';

export function logoutReducer(reducer: ActionReducer<State>): ActionReducer<State> {
  return (state: State | undefined, action: Action): State => {
    if (action.type === logoutActions.logout.type) {
      return reducer(undefined, action);
    }

    return reducer(state, action);
  };
}
