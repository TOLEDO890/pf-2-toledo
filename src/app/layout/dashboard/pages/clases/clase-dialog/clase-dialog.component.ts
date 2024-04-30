import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { IClase } from '../models/index';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-clase-dialogo',
  templateUrl: './clase-dialog.component.html',
  styleUrls: ['./clase-dialog.component.scss']
})
export class ClaseDialogoComponent implements OnInit {
  claseForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<ClaseDialogoComponent>
  ) { }

  ngOnInit(): void {
    this.claseForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      profesor: ['', Validators.required],
      horario: ['', Validators.required]
    });
  }

  get nombreControl() {
    return this.claseForm.get('nombre');
  }

  get profesorControl() {
    return this.claseForm.get('profesor');
  }

  get horarioControl() {
    return this.claseForm.get('horario');
  }

  onSave(): void {
    if (this.claseForm.valid) {
      this.dialogRef.close(this.claseForm.value as IClase);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}


