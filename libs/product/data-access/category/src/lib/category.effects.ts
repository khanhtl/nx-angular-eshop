import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { categoryActions, categoryActionsAPI } from './category.action';
import { CategoryService } from './category.service';

export const categoryEffects = createEffect(
  (actions$ = inject(Actions), categoryService = inject(CategoryService)) => {
    return actions$.pipe(
      ofType(categoryActions.load),
      mergeMap(() =>
        categoryService.getCategories().pipe(
          map((categories) =>
            categoryActionsAPI.getCategoriesSuccess({ categories })
          ),
          catchError((error) =>
            of(categoryActionsAPI.getCategoriesFailure({ error }))
          )
        )
      )
    );
  },
  {
    functional: true,
  }
);
