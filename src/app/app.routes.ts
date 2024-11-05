import { Route } from '@angular/router';
import {
  productEffects,
  productFeature,
} from '@es-libs/product/data-access/product';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';

export const appRoutes: Route[] = [
  {
    path: 'category/:category',
    loadComponent: () =>
      import('@es-libs/product/feature/product').then(
        (m) => m.ProductComponent
      ),
    providers: [provideState(productFeature), provideEffects(productEffects)],
  },
];
