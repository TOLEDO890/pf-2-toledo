
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IUser } from '../models/index';
import {MatInputModule} from '@angular/material/input';
@Component({
  selector: 'app-alumno-dialogo',
  templateUrl: './alumno-dialogo.component.html',
  styleUrl: './alumno-dialogo.component.scss'
})
export class AlumnoDialogoComponent {
  userForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private matDialogRef: MatDialogRef<AlumnoDialogoComponent>,
    @Inject(MAT_DIALOG_DATA) private editingUser?: IUser
  ) {
    this.userForm = this.formBuilder.group({
      Nombre: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-zA-ZÁÉÍÓÚáéíóúñÑ]+$'),
          
        ],
      ],
      Apellido: [
        '',
        [Validators.required, Validators.pattern('^[a-zA-ZÁÉÍÓÚáéíóúñÑ]+$')],
      ],
     
   
      role: ['USER', [Validators.required]],
    });

    if (editingUser) {
      this.userForm.patchValue(editingUser);
    }
  }

  get NombreControl() {
    return this.userForm.get('Nombre');
  }

  get ApellidoControl() {
    return this.userForm.get('Apellido');
  }
  get EdadControl() {
    return this.userForm.get('Edad')
  }

  onSave(): void {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
    } else {
      
      this.matDialogRef.close(this.userForm.value);
    }
  }
}
