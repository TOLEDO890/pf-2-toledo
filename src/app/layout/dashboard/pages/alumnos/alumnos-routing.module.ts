import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnosComponent } from './alumnos.component';
import { AlumnosdetailComponent } from './pages/alumnosdetail/alumnosdetail.component';

const routes: Routes = [{path:'',
component:AlumnosComponent
},{
  path: 'users/:id',
  component: AlumnosdetailComponent,
},
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnosRoutingModule {
  
 }
