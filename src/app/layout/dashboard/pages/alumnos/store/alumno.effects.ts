import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import { AlumnoActions } from './alumno.actions';
import { UserServiceService } from '../../../../../core/service/user-service.service';


@Injectable()
export class AlumnoEffects {

  loadAlumnos$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(AlumnoActions.loadAlumnos),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        this.UserServiceService.getUsers().pipe(
          map(data => AlumnoActions.loadAlumnosSuccess({ data })),
          catchError(error => of(AlumnoActions.loadAlumnosFailure({ error }))))
      )
    );
  });

  loadAlumnosdetail$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(AlumnoActions.loadAlumnosDetail),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        this.UserServiceService.getuserdetail().pipe(
          map(data => AlumnoActions.loadAlumnosDetailSuccess({ data })),
          catchError(error => of(AlumnoActions.loadAlumnosDetailFailure({ error }))))
      )
    );
  });


  constructor(private actions$: Actions, private UserServiceService: UserServiceService) {}
}
