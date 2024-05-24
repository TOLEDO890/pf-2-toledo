import { createFeature, createReducer, on } from '@ngrx/store';
import { CursoActions } from './curso.actions';

import { ICurso } from '../models/index';
import { act } from '@ngrx/effects';

export const cursoFeatureKey = 'curso';

export interface State {
cursos : ICurso[],
isloading: boolean,
error : unknown
}

export const initialState: State = {
cursos:[],
isloading:false,
error : null


};

export const reducer = createReducer(
  initialState,
  on(CursoActions.loadCursos, state => {
    return{
      ...state,
      isloading:true,
    }
  }),

  on(CursoActions.loadCursosSuccess, (state, action) => {
    return {
      ...state ,
      isloading:false,
      cursos : action.data
    }
  }),

  on(CursoActions.loadCursosFailure, (state, action) => {
    return {
      ...state ,
      isloading:false,
      error : action.error
    }
  }),
);

export const cursoFeature = createFeature({
  name: cursoFeatureKey,
  reducer,
});

