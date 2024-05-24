import { ClasesRoutingModule } from './clases-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from './../../../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClasesComponent } from './clases.component';
import { ClaseDialogoComponent } from "./clase-dialog/clase-dialog.component";
import { EffectsModule } from '@ngrx/effects';
import { ClaseEffects } from './store/clase.effects';
import { claseFeature } from './store/clase.reducer';
import { StoreModule } from '@ngrx/store';



@NgModule({
  declarations: [
    ClasesComponent,
    ClaseDialogoComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    SharedModule,
    ClasesRoutingModule,
    EffectsModule.forFeature([ClaseEffects]),
    StoreModule.forFeature(claseFeature)
  ]
})
export class ClasesModule { }
