import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ClaseDialogoComponent } from './clase-dialog/clase-dialog.component';
import { IClase } from './models/index';
import { ClasesService } from './clases.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { ClaseActions } from './store/clase.actions';
import { selectorloadclases } from './store/clase.selectors';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrls: ['./clases.component.scss']
})
export class ClasesComponent {
  clases : IClase[] | undefined;
  clases$: Observable<IClase[]> ; 
  displayedColumns: string[] = ['id', 'nombre', 'profesor', 'horario', 'actions'];
  constructor(private dialog: MatDialog ,private store :Store , private ClasesService : ClasesService) {
    this.clases$ = this.store.select(selectorloadclases)
  }
  ngOnInit(): void {
    this.store.dispatch(
      ClaseActions.loadClases()
        )
    
  }
 

  openDialog(clase?: IClase): void {
    const dialogRef = this.dialog.open(ClaseDialogoComponent, {
      width: '400px',
      data: clase ? { ...clase } : null
    });

    dialogRef.afterClosed().subscribe((result: IClase) => {
      if (result) {
        if (clase) {
          
          this.ClasesService.actualizarclase(result);
        } else {
      
          this.ClasesService.agregarClase(result);
        }
       
        this.clases$ = this.ClasesService.getclases();
      }
    });
  }

  onDeleteclase(id: number): void {
    if (confirm('¿Estás seguro de que quieres eliminar este curso?')) {
    
      this.ClasesService.eliminarClase(id);
 
      this.clases$ = this.ClasesService.getclases();
    }
  }
}


  

