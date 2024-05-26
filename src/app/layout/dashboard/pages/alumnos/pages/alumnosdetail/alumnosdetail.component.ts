import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserServiceService } from '../../../../../../core/service/user-service.service';
import { LoadingService } from '../../../../../../core/service/loading.service';
import { environment } from '../../../../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../../models/index';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AlumnoActions } from '../../store/alumno.actions';
import { selectusers } from '../../store/alumno.selectors';

@Component({
  selector: 'app-alumnosdetail',
  templateUrl: './alumnosdetail.component.html',
  styleUrl: './alumnosdetail.component.scss'
})
export class AlumnosdetailComponent {
   
  usersdetail$ : Observable<IUser[]> ;
 
  constructor(
    private route: ActivatedRoute,
    private usersService: UserServiceService,
    private loadingService: LoadingService,
    private http :HttpClient,
    private store : Store
  ) {
    this.loadingService.setIsLoading(true);
    this.usersService.getUserById(this.route.snapshot.params['id']).subscribe({
      next: (findedUser) => {
        console.log(findedUser);
      },
      complete: () => {
        this.loadingService.setIsLoading(false);
      },
    });
    
    this.usersdetail$ =this.store.select(selectusers)
 
  }
  ngOnInit(): void {
    this.store.dispatch(
      AlumnoActions.loadAlumnos()
        )
        
   }
  
}
