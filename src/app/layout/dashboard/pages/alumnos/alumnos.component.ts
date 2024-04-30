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
    'NombreDeHeroe',
    'role',
    'Don',
    'Edad', 
    'id',
    'actions',
    
  ];

 alumnos: IUser[] = [
    {
      id:1,
     Nombre:'izuku' ,
     Apellido:'midoriya',
     Clase: '1A',
     NombreDeHeroe:'Deku',
     role:'alumno',
     Don: 'one for all',
     Edad:17,
    },
    {
      id:2,
      Nombre:'katsuki' ,
     Apellido:'bakugo',
     Clase: '1A',
     NombreDeHeroe:' Dynamight ',
     role:'alumno',
     Don: 'explosion',
     Edad:17,
    },
    {
      id:3,
      Nombre:'shoto' ,
     Apellido:'todoroki',
     Clase: '1A',
     NombreDeHeroe:'shoto',
     role:'alumno',
     Don: 'mitad frio/mitad caliente',
     Edad:17,
    },
   
    
    
    {
      id:4,
      Nombre:'Tenya' ,
     Apellido:'Iida',
     Clase: '1A',
     NombreDeHeroe:'Ingenium',
     role:'alumno',
     Don: 'Engine',
     Edad:17,
    },
    
    {
      id:5,
      Nombre:'Fumikage',
     Apellido:'Tokoyami',
     Clase: '1A',
     NombreDeHeroe:'Tsukuyomi ',
     role:'alumno',
     Don: 'Dark Shadow',
     Edad:17,
    },
    {
      id:6,
      Nombre:'Tsuyu' ,
     Apellido:'Asui',
     Clase: '1A',
     NombreDeHeroe:'Froppy',
     role:'alumno',
     Don: 'Rana',
     Edad:16,
    },
    {
      id:7,
      Nombre:'Minoru' ,
     Apellido:'Mineta',
     Clase: '1A',
     NombreDeHeroe:'Grape Juice',
     role:'alumno',
     Don: 'Pop Off',
     Edad:17,
    },
    {
      id:8,
      Nombre:'Rikido' ,
     Apellido:'Sato',
     Clase: '1A',
     NombreDeHeroe:'Sugarman',
     role:'alumno',
     Don: 'Sugar Rush',
     Edad:17,
    },
    {
      id:9,
      Nombre:'Momo' ,
     Apellido:'Yaoyorozu',
     Clase: '1A',
     NombreDeHeroe:'Creati',
     role:'alumno',
     Don: 'Creación',
     Edad:17,
    },
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
