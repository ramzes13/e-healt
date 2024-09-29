import { RouterReducerState } from '@ngrx/router-store';
import { createFeatureSelector, createSelector } from '@ngrx/store';

import { RouterState } from './params.types';

const selectFeaturesParams = createFeatureSelector<RouterReducerState<RouterState>>('params');

export const selectQueryParams = createSelector(selectFeaturesParams, ({ state }) => state.queryParams);
export const selectParams = createSelector(selectFeaturesParams, ({ state }) => state.params);
