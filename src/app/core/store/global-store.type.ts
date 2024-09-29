import { RouterReducerState } from '@ngrx/router-store';

import { RouterState } from './params.types';

export interface State {
  params: RouterReducerState<RouterState>;
}
