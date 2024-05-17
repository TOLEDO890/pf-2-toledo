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
 

  
}
