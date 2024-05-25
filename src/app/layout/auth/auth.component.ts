import { Component } from '@angular/core';
import { AuthService } from '../../core/service/auth-service.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {
  constructor (private AuthService : AuthService) {}

  
}
