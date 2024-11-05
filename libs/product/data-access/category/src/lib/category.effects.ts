import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, EMPTY, exhaustMap, map } from 'rxjs';
import { categoryActionsSuccess, getCategoryActions } from './category.action';
import { CategoryService } from './category.service';

@Injectable()
export class CategoryEffects {
  #categoryService = inject(CategoryService);
  actions$ = inject(Actions);

  loadCategories$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCategoryActions),
      exhaustMap(() =>
        this.#categoryService.getCategories().pipe(
          map((categories) => categoryActionsSuccess(categories)),
          catchError(() => EMPTY)
        )
      )
    )
  );
}
