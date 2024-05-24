import { AlumnoDialogoComponent } from './alumno-dialogo/alumno-dialogo.component';
import { IUser } from './models/index';
import { FormBuilder } from '@angular/forms';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserServiceService } from '../../../../core/service/user-service.service';
import { Store } from '@ngrx/store';
import { AlumnoActions } from './store/alumno.actions';
import { Observable } from 'rxjs';
import { selectusers } from './store/alumno.selectors';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrl: './alumnos.component.scss'
})
export class AlumnosComponent {
 users$ : Observable<IUser[]> ;

  constructor(private FormBuilder: FormBuilder, private matDialog: MatDialog ,private  alumnosService:UserServiceService , private store : Store) {
    this.users$ =this.store.select(selectusers)
  }

   ngOnInit(): void {
    this.store.dispatch(
      AlumnoActions.loadAlumnos()
        )
        
   }



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
                    // Filtrar propiedades no deseadas
                    const filteredResult = this.filterUserProperties(result);
                    
                    if (editingUser) {
                        // Actualizar el usuario existente
                        this.alumnos = this.alumnos.map((u) =>
                            u.id === editingUser.id ? { ...u, ...filteredResult } : u
                        );
                    } else {
                        // Crear un nuevo usuario
                        const newId = new Date().getTime();
                        filteredResult.id = newId;
                        this.alumnos = [...this.alumnos, filteredResult];
                    }
                }
            },
        });
}

// Método para filtrar las propiedades del objeto result
private filterUserProperties(user: any): IUser {
    const { id, Clase, Nombre, Apellido, role, Edad, email, password, token } = user;
    return { id, Clase, Nombre, Apellido, role, Edad, email, password, token };
}



  onDeleteUser(id: number): void {
    if (confirm('usted desea eliminar el usuario?')) {
      this.alumnos = this.alumnos.filter((u) => u.id != id);
    }
  }


}
