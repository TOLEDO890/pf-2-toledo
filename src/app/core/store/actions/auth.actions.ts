import { createAction, props } from '@ngrx/store';
import { IUser } from '../../../layout/dashboard/pages/alumnos/models';

export const login = createAction(
  '[Auth] Login',
  props<{ user: IUser }>()
);

export const logout = createAction(
  '[Auth] Logout'
);
