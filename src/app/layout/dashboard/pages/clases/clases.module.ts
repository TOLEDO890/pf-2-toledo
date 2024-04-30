import { ClasesRoutingModule } from './clases-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from './../../../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClasesComponent } from './clases.component';
import { ClaseDialogoComponent } from "./clase-dialog/clase-dialog.component";



@NgModule({
  declarations: [
    ClasesComponent,
    ClaseDialogoComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    SharedModule,
    ClasesRoutingModule
  ]
})
export class ClasesModule { }
