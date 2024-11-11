import { computed, inject } from '@angular/core';
import { tapResponse } from '@ngrx/operators';
import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, switchMap, tap } from 'rxjs';
import { Product } from './product.model';
import { ProductService } from './product.service';

interface State {
  products: Product[];
  error: unknown;
  isLoading: boolean;
  filter: { query: string; order: 'asc' | 'desc'; category: string };
}

const initialState: State = {
  products: [],
  error: undefined,
  filter: { query: '', order: 'asc', category: '' },
  isLoading: false,
};

export const ProductStore = signalStore(
  withState(initialState),
  withComputed(({ products, filter }) => ({
    productssCount: computed(() => products().length),
    sortedProducts: computed(() => {
      const direction = filter.order() === 'asc' ? 1 : -1;

      return products().toSorted(
        (a, b) => direction * a.title.localeCompare(b.title)
      );
    }),
  })),
  withMethods((store, productsService = inject(ProductService)) => ({
    loadByCategory: rxMethod<string>(
      pipe(
        tap(() => patchState(store, { isLoading: true })),
        switchMap((category) => {
          return productsService.getByCategory(category).pipe(
            tapResponse({
              next: (products) =>
                patchState(store, { products, isLoading: false }),
              error: (error) => {
                patchState(store, { isLoading: false, error });
              },
            })
          );
        })
      )
    ),
  }))
);
