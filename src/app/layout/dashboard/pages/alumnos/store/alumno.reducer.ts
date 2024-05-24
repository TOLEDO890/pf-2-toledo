
import { createFeature, createReducer, on} from '@ngrx/store';
import { AlumnoActions } from './alumno.actions';
import { IUser } from '../models';

export const alumnoFeatureKey = 'alumno';

export interface State {
users: IUser[],
isloading: boolean;
error:unknown

}

export const initialState: State = {
users: [],
isloading: false,
error: null
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
);

export const alumnoFeature = createFeature({
  name: alumnoFeatureKey,
  reducer,
});

