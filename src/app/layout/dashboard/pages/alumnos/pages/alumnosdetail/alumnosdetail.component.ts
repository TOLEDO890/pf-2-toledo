import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserServiceService } from '../../../../../../core/service/user-service.service';
import { LoadingService } from '../../../../../../core/service/loading.service';

@Component({
  selector: 'app-alumnosdetail',
  templateUrl: './alumnosdetail.component.html',
  styleUrl: './alumnosdetail.component.scss'
})
export class AlumnosdetailComponent {
  constructor(
    private route: ActivatedRoute,
    private usersService: UserServiceService,
    private loadingService: LoadingService
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
  }
}
