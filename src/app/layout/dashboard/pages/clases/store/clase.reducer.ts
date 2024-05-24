import { createFeature, createReducer, on } from '@ngrx/store';
import { ClaseActions } from './clase.actions';
import { IClase } from '../models';
import { act } from '@ngrx/effects';

export const claseFeatureKey = 'clase';

export interface State {
clases : IClase[],
isloading: Boolean,
error : unknown
}

export const initialState: State = {
clases : [],
isloading :false,
error : null
};

export const reducer = createReducer(
  initialState,
  on(ClaseActions.loadClases, state => {
    return {
      ...state ,
      isloading :true
    }
  }),

  on(ClaseActions.loadClasesSuccess, (state, action) => {
    return {
      ...state ,
      isloading:false ,
      clases : action.data
    }
  }),

  on(ClaseActions.loadClasesFailure, (state, action) => {
    return {
      ...state ,
      error : action.error
    }
  }),
);

export const claseFeature = createFeature({
  name: claseFeatureKey,
  reducer,
});

