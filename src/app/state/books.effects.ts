import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError, of } from 'rxjs';
import { GoogleBooksService } from '../book-list/books.service';
import { BooksApiActions } from './books.actions';

@Injectable()
export class BooksEffects {
  constructor(
    private actions$: Actions,
    private booksService: GoogleBooksService
  ) {}

  loadBooks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BooksApiActions.getBooks),
      switchMap(() =>
        this.booksService.getBooks().pipe(
          map((books) => BooksApiActions.getBooksSuccess({ books })),
          catchError((error) => of(BooksApiActions.getBooksFailure({ error })))
        )
      )
    )
  );
}
