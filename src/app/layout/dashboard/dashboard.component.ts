import { Component } from '@angular/core';
import { logout } from '../../core/store/actions/auth.actions';
import { AuthService } from '../../core/service/auth-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  showFiller = false;
 constructor (private AuthService : AuthService){}
  onLogout(): void {
    localStorage.removeItem('token')
    // Aquí podrías agregar cualquier otra lógica de redireccionamiento o acciones necesarias después del logout
  }
  
}
