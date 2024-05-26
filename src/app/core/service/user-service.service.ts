import { Injectable } from '@angular/core';
import { IUser } from '../../layout/dashboard/pages/alumnos/models';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private apiUrl = `${environment.apiURL}/users`;
 public apiurlspect =`${environment.apiURL}/users`;
  constructor(private http: HttpClient) { }

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.apiUrl);
  }
  
  getUserById(id: number | string): Observable<IUser | undefined> {
    return this.http.get<IUser>(`${environment.apiURL}/users/${id}`);
  }
  getuserdetail() : Observable<IUser[]>{
    return this.http.get<IUser[]>(`${environment.apiURL}/users?_embed=courses`)
  }
}
