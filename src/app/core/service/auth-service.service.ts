import { environment } from './../../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../store/reducers/app.state';
import * as AuthActions from '../store/actions/auth.actions';
import { IUser } from '../../layout/dashboard/pages/alumnos/models';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = environment.apiURL;

  constructor(
    private router: Router,
    private httpClient: HttpClient,
    private store: Store<AppState>
  ) {}

  login(email: string, password: string): Observable<boolean> {
    return this.httpClient.get<IUser[]>(`${this.apiUrl}/users?email=${email}&password=${password}`).pipe(
      map(users => {
        if (users && users.length > 0) {
          const user = users[0];
          this.store.dispatch(AuthActions.login({ user }));
          localStorage.setItem('token', user.token);
          return true;
        }
        return false;
      }),
      catchError(error => {
        console.error('Error al iniciar sesión:', error);
        return of(false);
      })
    );
  }

  logout(): void {
    this.store.dispatch(AuthActions.logout());
    
    this.router.navigate(['auth', 'login']);
  }

  verifyToken(): Observable<boolean> {
    const token = localStorage.getItem('token');
    if (!token) {
      this.logout();
      return of(false);
    }

    return this.httpClient.get<IUser>(`${this.apiUrl}/users?token`, { headers: {  } })
      .pipe(
        map((user) => {
          if (user && user.token) {
            this.store.dispatch(AuthActions.login({ user }));
            // No es necesario volver a guardar el token en localStorage aquí
            return true;
          } else {
            return false;
          }
        }),
        tap((loggedIn) => {
          if (!loggedIn) {
            this.logout();
            this.router.navigate(['/login']);
          }
        }),
        catchError(() => {
          this.logout();
          this.router.navigate(['/login']);
          return of(false);
        })
      );
  }
}
