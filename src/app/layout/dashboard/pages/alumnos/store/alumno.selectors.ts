import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAlumno from './alumno.reducer';

export const selectAlumnoState = createFeatureSelector<fromAlumno.State>(
  fromAlumno.alumnoFeatureKey
);
export const selectusers = createSelector(selectAlumnoState, (state)=>state.users)
export const selectusersdetail = createSelector(selectAlumnoState,(state)=>state.userdetail)
