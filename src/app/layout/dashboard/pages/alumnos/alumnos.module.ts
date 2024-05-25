import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnosRoutingModule } from './alumnos-routing.module';
import { AlumnosComponent } from './alumnos.component';
import { FormBuilder } from '@angular/forms';
import { IUser } from './models/index';
import { AlumnoDialogoComponent } from './alumno-dialogo/alumno-dialogo.component';
import { SharedModule } from '../../../../shared/shared.module';
import { EffectsModule } from '@ngrx/effects';
import { AlumnoEffects } from './store/alumno.effects';
import { StoreModule } from '@ngrx/store';
import { alumnoFeature } from './store/alumno.reducer';
import { AlumnosdetailComponent } from './pages/alumnosdetail/alumnosdetail.component';




@NgModule({
  declarations: [
    AlumnosComponent,
    AlumnoDialogoComponent,
    AlumnosdetailComponent
  ],
  imports: [
    CommonModule,
    AlumnosRoutingModule,
    SharedModule,
    EffectsModule.forFeature([AlumnoEffects])  ,
    StoreModule.forFeature(alumnoFeature)
  ],
  exports :[
    AlumnosComponent,
    AlumnoDialogoComponent
  ]
})
export class AlumnosModule { 
  
  
}

  

