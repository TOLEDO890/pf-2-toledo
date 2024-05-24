import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { IClase } from '../models';

export const ClaseActions = createActionGroup({
  source: 'Clase',
  events: {
    'Load Clases': emptyProps(),
    'Load Clases Success': props<{ data: IClase[] }>(),
    'Load Clases Failure': props<{ error: unknown | null}>(),
  }
});
