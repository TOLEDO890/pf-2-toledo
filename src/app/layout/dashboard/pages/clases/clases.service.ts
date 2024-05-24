import { Injectable } from '@angular/core';
import { IClase } from './models';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClasesService {
  clases: IClase[] = [];

  private apiUrl = `${environment.apiURL}/class`;

  constructor(private http: HttpClient) { }

  getclases(): Observable<IClase[]> {
    return this.http.get<IClase[]>(this.apiUrl);
  }
  agregarClase(clases: IClase): void {
    this.clases.push(clases);
  }

  eliminarClase(id: number): void {
    this.clases = this.clases.filter(clases => clases.id !== id);
  }
  actualizarclase(claseactualizada: IClase): void {
    const index = this.clases.findIndex(clases => clases.id === claseactualizada.id);
    if (index !== -1) {
      this.clases[index] = claseactualizada;
    }

 
} }
