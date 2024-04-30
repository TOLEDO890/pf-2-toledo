import { Injectable } from '@angular/core';
import { ICurso } from './models/index';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
   cursos: ICurso[] = [];

  constructor() {
    this.cursos = [
      { id: 1, nombre: 'Curso de Matemáticas', descripcion: 'Aprende matemáticas básicas', precio: 50, materias: ['Álgebra', 'Cálculo'] },
      { id: 2, nombre: 'Curso de Inglés', descripcion: 'Mejora tu inglés con este curso completo', precio: 70, materias: ['Gramática', 'Vocabulario'] },
      { id: 3, nombre: 'Curso de Programación en Python', descripcion: 'Aprende a programar en Python desde cero', precio: 100, materias: ['Introducción a Python', 'Programación Orientada a Objetos'] },
      { id: 4, nombre: 'Curso de Diseño Gráfico', descripcion: 'Domina las herramientas de diseño gráfico más populares', precio: 80, materias: ['Adobe Photoshop', 'Adobe Illustrator'] },
      { id: 5, nombre: 'Curso de Marketing Digital', descripcion: 'Aprende estrategias de marketing digital efectivas', precio: 90, materias: ['SEO', 'Publicidad en Redes Sociales'] },
      { id: 6, nombre: 'Curso de Fotografía', descripcion: 'Domina la técnica fotográfica y el uso de la cámara', precio: 60, materias: ['Composición Fotográfica', 'Edición de Imágenes'] },
      { id: 7, nombre: 'Curso de Desarrollo Web', descripcion: 'Aprende a crear sitios web modernos y responsivos', precio: 120, materias: ['HTML', 'CSS', 'JavaScript'] },
      { id: 8, nombre: 'Curso de Finanzas Personales', descripcion: 'Mejora tus habilidades financieras y aprende a gestionar tu dinero', precio: 75, materias: ['Presupuesto', 'Inversiones'] },
     
    ];
  }

  getCursos(): ICurso[] {
    return this.cursos;
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

