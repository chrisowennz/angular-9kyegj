import { createActionGroup, props } from '@ngrx/store';
import { emptyProps } from '@ngrx/store';
import { Book } from '../book-list/books.model';

export const BooksActions = createActionGroup({
  source: 'Books',
  events: {
    'Add Book': props<{ bookId: string }>(),
    'Remove Book': props<{ bookId: string }>(),
  },
});

export const BooksApiActions = createActionGroup({
  source: 'Books API',
  events: {
    'Get Books': emptyProps(),
    'Get Books Success': props<{ books: ReadonlyArray<Book> }>(),
    'Get Books Failure': props<{ error: string }>()
  },
});


/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/