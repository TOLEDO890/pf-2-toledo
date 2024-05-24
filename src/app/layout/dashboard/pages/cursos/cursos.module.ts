import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';
import { CursoDialogoComponent } from './cursos-dialog/cursos-dialog.component';
import { SharedModule } from '../../../../shared/shared.module';
import { FormGroup } from '@angular/forms';
import { CursosRoutingModule } from './cursos-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { CursoEffects } from './store/curso.effects';
import { cursoFeature } from './store/curso.reducer';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    CursosComponent,
    CursoDialogoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CursosRoutingModule,
    EffectsModule.forFeature([CursoEffects]) ,
    StoreModule.forFeature(cursoFeature)
   
  ]
})
export class CursosModule { }
