import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import { CursoActions } from './curso.actions';
import { CursoService } from '../curso.service';


@Injectable()
export class CursoEffects {

  loadCursos$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CursoActions.loadCursos),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        this.cursoservice.getCursos().pipe(
          map(data => CursoActions.loadCursosSuccess({data})),
          catchError(error => of(CursoActions.loadCursosFailure({ error }))))
      )
    );
  });


  constructor(private actions$: Actions , private cursoservice : CursoService) {}
}
