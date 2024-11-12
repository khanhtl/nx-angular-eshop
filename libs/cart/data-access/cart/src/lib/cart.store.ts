import { computed, inject } from '@angular/core';
import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { lastValueFrom } from 'rxjs';
import { Cart } from './cart.model';
import { CartService } from './cart.service';

export interface State {
  carts: Cart[];
  isLoading: boolean;
  error: unknown;
}

const initialState: State = {
  carts: [],
  error: undefined,
  isLoading: false,
};

export const CartStore = signalStore(
  withState(initialState),
  withComputed(({ carts }) => ({
    countCart: computed(() => carts().length),
  })),
  withMethods((store, cartService = inject(CartService)) => ({
    async load() {
      patchState(store, { isLoading: true });
      const carts = await lastValueFrom(cartService.getCarts());
      patchState(store, { isLoading: false, carts });
    },
  }))
);
