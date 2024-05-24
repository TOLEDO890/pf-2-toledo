import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import { ClaseActions } from './clase.actions';
import { ClasesService } from '../clases.service';


@Injectable()
export class ClaseEffects {

  loadClases$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(ClaseActions.loadClases),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        this.ClasesService.getclases().pipe(
          map(data => ClaseActions.loadClasesSuccess({ data })),
          catchError(error => of(ClaseActions.loadClasesFailure({ error }))))
      )
    );
  });


  constructor(private actions$: Actions , private ClasesService:ClasesService ) {}
}
