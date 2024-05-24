import { Injectable } from '@angular/core';

import { ICurso } from './models/index';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
   cursos: ICurso[] = [];
 
   private apiUrl = `${environment.apiURL}/courses`;
  constructor( private http: HttpClient) {
   
    
  }

  getCursos(): Observable<ICurso[]> {
    return this.http.get<ICurso[]>(this.apiUrl);
  }

  agregarCurso(curso: ICurso): void {
    this.cursos.push(curso);
  }

  eliminarCurso(id: number): void {
    this.cursos = this.cursos.filter(curso => curso.id !== id);
  }
  actualizarCurso(cursoActualizado: ICurso): void {
    const index = this.cursos.findIndex(curso => curso.id === cursoActualizado.id);
    if (index !== -1) {
      this.cursos[index] = cursoActualizado;
    }

  
}
}

