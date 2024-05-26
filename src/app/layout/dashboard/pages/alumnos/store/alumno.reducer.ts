
import { createFeature, createReducer, on} from '@ngrx/store';
import { AlumnoActions } from './alumno.actions';
import { IUser } from '../models';
import { Action } from 'rxjs/internal/scheduler/Action';



export const alumnoFeatureKey = 'alumno';

export interface State {
users: IUser[],
isloading: boolean;
error:unknown;
userdetail: IUser[];


}

export const initialState: State = {
users: [],
isloading: false,
error: null,
userdetail:[]
};

export const reducer = createReducer(
  initialState,
  on(AlumnoActions.loadAlumnos, (state) => {
    return{
      ...state,
      isloading:true,
    }
  }),

  on(AlumnoActions.loadAlumnosSuccess, (state, action) => {
    return {
      ...state,
      isloading:false,
      users: action.data
    }
  }),

  on(AlumnoActions.loadAlumnosFailure, (state, action) => {
    return{
     ...state ,
      error:action.error,
      isloading:false,
    }
  }),
  
  on(AlumnoActions.loadAlumnosDetail, (state) => {
    return{
      ...state,
      isloading:true,
    }
  }),

  on(AlumnoActions.loadAlumnosDetailSuccess, (state, action) => {
    return {
      ...state,
      isloading:false,
      userdetail: action.data
    }
  }),

  on(AlumnoActions.loadAlumnosDetailFailure, (state, action) => {
    return{
     ...state ,
      error:action.error,
      isloading:false,
    }
  }),
);

export const alumnoFeature = createFeature({
  name: alumnoFeatureKey,
  reducer,
});

