import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnosRoutingModule } from './alumnos-routing.module';
import { AlumnosComponent } from './alumnos.component';
import { FormBuilder } from '@angular/forms';
import { IUser } from './models/index';
import { AlumnoDialogoComponent } from './alumno-dialogo/alumno-dialogo.component';
import { SharedModule } from '../../../../shared/shared.module';



@NgModule({
  declarations: [
    AlumnosComponent,
    AlumnoDialogoComponent
  ],
  imports: [
    CommonModule,
    AlumnosRoutingModule,
    SharedModule

    
  ],
  exports :[
    AlumnosComponent,
    AlumnoDialogoComponent
  ]
})
export class AlumnosModule { 
  
  
}

  

