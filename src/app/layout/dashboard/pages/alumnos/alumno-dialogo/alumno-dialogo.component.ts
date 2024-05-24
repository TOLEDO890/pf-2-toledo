import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IUser, UserRole } from '../models/index';

@Component({
  selector: 'app-alumno-dialogo',
  templateUrl: './alumno-dialogo.component.html',
  styleUrls: ['./alumno-dialogo.component.scss']
})
export class AlumnoDialogoComponent {
  userForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private matDialogRef: MatDialogRef<AlumnoDialogoComponent>,
    @Inject(MAT_DIALOG_DATA) private editingUser?: IUser
  ) {
    this.userForm = this.formBuilder.group({
      id: [null],
      Clase: ['', [Validators.required]],
      Nombre: ['', [Validators.required, Validators.pattern('^[a-zA-ZÁÉÍÓÚáéíóúñÑ]+$')]],
      Apellido: ['', [Validators.required, Validators.pattern('^[a-zA-ZÁÉÍÓÚáéíóúñÑ]+$')]],
      role: ['alumno', [Validators.required]],
      Edad: [null, [Validators.required, Validators.min(0)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      token: ['']
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
    return this.userForm.get('Edad');
  }

  onSave(): void {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
    } else {
      this.matDialogRef.close(this.userForm.value);
    }
  }
}
