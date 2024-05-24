import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { IUser } from '../models';

export const AlumnoActions = createActionGroup({
  source: 'Alumno',
  events: {
    'Load Alumnos': emptyProps(),
    'Load Alumnos Success': props<{ data: IUser[]}>(),
    'Load Alumnos Failure': props<{ error: unknown }>(),
  }
});
