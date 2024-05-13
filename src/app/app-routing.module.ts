import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { AuthComponent } from './layout/auth/auth.component';
const routes: Routes = [{ path: 'dashboard',
component: DashboardComponent,
loadChildren: () =>
  import('./layout/dashboard/dashboard.module').then(
    (m) => m.DashboardModule
  ),
},
{path:'auth' ,
component:AuthComponent,
loadChildren: () => import('./layout/auth/auth.module').then((m) => m.AuthModule)
},
{
  path: '**',
  redirectTo: 'auth/login',
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
