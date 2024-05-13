import { Injectable } from '@angular/core';
import { IUser } from '../../layout/dashboard/pages/alumnos/models';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private apiUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.apiUrl);
  }
  
}
