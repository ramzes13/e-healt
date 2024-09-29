/* eslint-disable @ngrx/prefix-selectors-with-select */
import { createFeatureSelector, createSelector } from '@ngrx/store';

import { storeKey } from './auth.config';
import { State } from './auth.type';

const stateSelector = createFeatureSelector<State>(storeKey);

export const all = createSelector(stateSelector, (state) => state);
export const isLoading = createSelector(stateSelector, (state) => state.isLoading);
export const isAuthenticated = createSelector(stateSelector, (state) => state.isAuthenticated);
export const token = createSelector(stateSelector, (state) => state.accessToken);
export const refreshToken = createSelector(stateSelector, (state) => state.refreshToken);
export const error = createSelector(stateSelector, (state) => state.error);
export const user = createSelector(stateSelector, (state) => state.user);
