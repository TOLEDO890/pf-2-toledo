import { IUser } from '../../../layout/dashboard/pages/alumnos/models';

export interface AppState {
  auth: AuthState;
}

export interface AuthState {
  user: IUser | null;
  isAuthenticated: boolean;
}