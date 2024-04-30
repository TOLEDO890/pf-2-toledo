import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';
import { CursoDialogoComponent } from './cursos-dialog/cursos-dialog.component';
import { SharedModule } from '../../../../shared/shared.module';
import { FormGroup } from '@angular/forms';
import { CursosRoutingModule } from './cursos-routing.module';

@NgModule({
  declarations: [
    CursosComponent,
    CursoDialogoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CursosRoutingModule 
   
  ]
})
export class CursosModule { }
