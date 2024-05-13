import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../store/reducers/app.state';
import * as AuthActions from '../store/actions/auth.actions';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = 'http://localhost:3000';

  constructor(
    private router: Router,
    private httpClient: HttpClient,
    private store: Store<AppState>
  ) {}

  login(email: string, password: string): Observable<boolean> {
    return this.httpClient.get<any>(`${this.apiUrl}/users?email=${email}&password=${password}`).pipe(
      map(response => {
        if (response && response.length > 0) {
          const user = response[0];
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
    localStorage.removeItem('token');
    this.router.navigate(['auth', 'login']);
  }

  verifyToken(): Observable<boolean> {
    const token = localStorage.getItem('token');
    if (!token) {
      this.logout();
      return of(false);
    }
    return this.httpClient
      .get<any>(`${this.apiUrl}/verifyToken`, { headers: { 'Authorization': `Bearer ${token}` } })
      .pipe(
        map((response) => {
          if (response && response.token) {
            const user = response;
            this.store.dispatch(AuthActions.login({ user }));
            return true;
          } else {
            this.logout();
            return false;
          }
        }),
        catchError(() => {
          this.logout();
          return of(false);
        })
      );
  }
}
