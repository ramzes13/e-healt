import { createAction } from '@ngrx/store';

import { createType } from './create-type.helper';

const type = createType('global');

export const logoutActions = {
  logout: createAction(type('logout')),
};
