import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AlumnosdetailComponent } from './pages/alumnos/pages/alumnosdetail/alumnosdetail.component';

const routes: Routes = [ 
{path:'clases',
 loadChildren:() => import ('./pages/clases/clases.module').then((m)=>m.ClasesModule)
},
{path:'cursos',
 loadChildren:() => import ('./pages/cursos/cursos.module').then((m)=>m.CursosModule)
},
{path:'alumnos',
 loadChildren:() => import ('./pages/alumnos/alumnos.module').then((m)=>m.AlumnosModule)
},
 ];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
