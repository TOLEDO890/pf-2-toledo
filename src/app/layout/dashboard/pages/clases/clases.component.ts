import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ClaseDialogoComponent } from './clase-dialog/clase-dialog.component';
import { IClase } from './models/index';
import { clases } from './clases.service'; 

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrls: ['./clases.component.scss']
})
export class ClasesComponent {
  clases: IClase[] = clases; 
  displayedColumns: string[] = ['id', 'nombre', 'profesor', 'horario', 'actions'];

  constructor(private dialog: MatDialog) {}

  openDialog(clase?: IClase): void {
    const dialogRef = this.dialog.open(ClaseDialogoComponent, {
      width: '400px',
      data: clase ? { ...clase } : null
    });

    dialogRef.afterClosed().subscribe((result: IClase) => {
      if (result) {
        if (clase) {
          this.clases = this.clases.map(c => (c.id === result.id ? { ...result } : c));
        } else {
          result.id = this.getNextId();
          this.clases.push(result);
        }
      }
    });
  }

  onDeleteClase(id: number): void {
    if (confirm('¿Estás seguro de que quieres eliminar esta clase?')) {
      this.clases = this.clases.filter(clase => clase.id !== id);
    }
  }

  getNextId(): number {
    return this.clases.length > 0 ? Math.max(...this.clases.map(clase => clase.id)) + 1 : 1;
  }
}

  

