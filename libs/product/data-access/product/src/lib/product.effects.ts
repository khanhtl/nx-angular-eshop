import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { productActions, productActionsAPI } from './product.action';
import { ProductService } from './product.service';

export const loadproductsByCategoryEffects = createEffect(
  (actions$ = inject(Actions), productService = inject(ProductService)) => {
    return actions$.pipe(
      ofType(productActions.load),
      mergeMap(({ category }) =>
        productService.getProductsForCategory(category).pipe(
          map((products) =>
            productActionsAPI.loadProductsSuccess({ products })
          ),
          catchError((error) =>
            of(productActionsAPI.loadProductsFailure({ error }))
          )
        )
      )
    );
  },
  {
    functional: true,
  }
);

export const loadproductsEffects = createEffect(
  (actions$ = inject(Actions), productService = inject(ProductService)) => {
    return actions$.pipe(
      ofType(productActions.loadAll),
      mergeMap(() =>
        productService.getProducts().pipe(
          map((products) =>
            productActionsAPI.loadProductsSuccess({ products })
          ),
          catchError((error) =>
            of(productActionsAPI.loadProductsFailure({ error }))
          )
        )
      )
    );
  },
  {
    functional: true,
  }
);
