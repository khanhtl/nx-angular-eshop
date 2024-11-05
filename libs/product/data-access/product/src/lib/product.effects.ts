import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { productActions, productActionsAPI } from './product.action';
import { ProductService } from './product.service';

export const productEffects = createEffect(
  (actions$ = inject(Actions), productService = inject(ProductService)) => {
    return actions$.pipe(
      ofType(productActions.load),
      mergeMap(({ category }) =>
        productService.getProductsFroCategory(category).pipe(
          map((products) =>
            productActionsAPI.getProductsForCategorySuccess({ products })
          ),
          catchError((error) =>
            of(productActionsAPI.getProductsForCategoryFailure({ error }))
          )
        )
      )
    );
  },
  {
    functional: true,
  }
);
