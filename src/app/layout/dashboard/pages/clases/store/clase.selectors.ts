import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromClase from './clase.reducer';

export const selectClaseState = createFeatureSelector<fromClase.State>(
  fromClase.claseFeatureKey
);
export const selectorloadclases = createSelector(selectClaseState, (state)=>state.clases)
