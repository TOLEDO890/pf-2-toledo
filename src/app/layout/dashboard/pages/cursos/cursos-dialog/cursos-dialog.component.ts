import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ICurso } from '../models/index';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-curso-dialog',
  templateUrl: './cursos-dialog.component.html',
  styleUrls: ['./cursos-dialog.component.scss']
})
export class CursoDialogoComponent {
  cursoForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<CursoDialogoComponent>
  ) {
    this.cursoForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      precio: ['', Validators.required],
      detalles: [''],
      materias: ['']
    });
  }

  get nombreControl() {
    return this.cursoForm.get('nombre');
  }

  get precioControl() {
    return this.cursoForm.get('precio');
  }
  get descripcionControl() {
    return this.cursoForm.get('descripcion');
  }
  get materiasControl() {
    return this.cursoForm.get('materias');
  }
  

  onSave(): void {
    if (this.cursoForm.valid) {
      this.dialogRef.close(this.cursoForm.value as ICurso);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}

