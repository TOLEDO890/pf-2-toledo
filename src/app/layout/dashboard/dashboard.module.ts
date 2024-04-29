
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SharedModule } from "../../shared/shared.module";
import { MatToolbar } from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { AlumnosModule } from './pages/alumnos/alumnos.module';


@NgModule({
  declarations:[
    DashboardComponent,
 
   
   
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatButtonModule,
    MatSidenavModule,
    SharedModule,
    MatToolbar,
    MatIconModule,
    MatToolbarModule,
    AlumnosModule
  
  ],
  exports :[
    DashboardComponent,
    AlumnosModule
   
  ]
})
export class DashboardModule { }
