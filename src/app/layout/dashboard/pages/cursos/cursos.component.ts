import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CursoDialogoComponent } from './cursos-dialog/cursos-dialog.component';
import { ICurso } from './models/index';
import { CursoService } from './curso.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectorloadcursos } from './store/curso.selectors';
import { CursoActions } from './store/curso.actions';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {
  cursos$:Observable <ICurso[]> ; 
  displayedColumns: string[] = ['id', 'nombre', 'precio', 'descripcion', 'materias', 'actions'];

  constructor(private dialog: MatDialog, private cursoService: CursoService ,private Store :Store) {
    this.cursos$ =this.Store.select(selectorloadcursos)
   }

  ngOnInit(): void {
    this.Store.dispatch(
      CursoActions.loadCursos()
        )
  }
 

  openDialog(curso?: ICurso): void {
    const dialogRef = this.dialog.open(CursoDialogoComponent, {
      width: '400px',
      data: curso ? { ...curso } : null
    });

    dialogRef.afterClosed().subscribe((result: ICurso) => {
      if (result) {
        if (curso) {
          
          this.cursoService.actualizarCurso(result);
        } else {
      
          this.cursoService.agregarCurso(result);
        }
       
        this.cursos$ = this.cursoService.getCursos();
      }
    });
  }

  onDeleteCurso(id: number): void {
    if (confirm('¿Estás seguro de que quieres eliminar este curso?')) {
    
      this.cursoService.eliminarCurso(id);
 
      this.cursos$ = this.cursoService.getCursos();
    }
  }
}

