import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, EMPTY, map, mergeMap } from 'rxjs';
import { CategoryActions } from './category.action';
import { CategoryService } from './category.service';

@Injectable()
export class CategoryEffects {
  #categoryService = inject(CategoryService);
  actions$ = inject(Actions);

  loadCategories$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CategoryActions.getCategories),
      mergeMap(() =>
        this.#categoryService.getCategories().pipe(
          map((categories) =>
            CategoryActions.getCategoriesSuccess({ categories })
          ),
          catchError(() => EMPTY)
        )
      )
    )
  );
}
