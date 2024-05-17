import { AlumnoDialogoComponent } from './alumno-dialogo/alumno-dialogo.component';
import { IUser } from './models/index';
import { FormBuilder } from '@angular/forms';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrl: './alumnos.component.scss'
})
export class AlumnosComponent {

  constructor(private FormBuilder: FormBuilder, private matDialog: MatDialog) {}

  displayedColumns: string[] = [
    'Clase',
    'NombreCompleto',
    'role',
    'Edad', 
    'id',
    'actions',
    
  ];

 alumnos: IUser[] = [
 
  ];



  openDialog(editingUser?: IUser): void {
    this.matDialog
      .open(AlumnoDialogoComponent, {
        data: editingUser,
      })
      .afterClosed()
      .subscribe({
        next: (result) => {
          if (result) {
            if (editingUser) {
       
              this.alumnos = this.alumnos.map((u) =>
                u.id === editingUser.id ? { ...u, ...result } : u
              );
            } else {
              
              result.id = new Date().getTime().toString().substring(0, 3);
              this.alumnos = [...this.alumnos, result];
            }
          }
        },
      });
  }

  onDeleteUser(id: number): void {
    if (confirm('usted desea eliminar el usuario?')) {
      this.alumnos = this.alumnos.filter((u) => u.id != id);
    }
  }


}
