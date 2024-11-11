import { inject } from '@angular/core';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { lastValueFrom } from 'rxjs';
import { CategoryService } from './category.service';

export interface State {
  categories: string[];
  isLoading: boolean;
  error: unknown;
}

const initialState: State = {
  categories: [],
  error: undefined,
  isLoading: false,
};

export const CategoryStore = signalStore(
  withState(initialState),
  withMethods((store, categoryService = inject(CategoryService)) => ({
    async load() {
      patchState(store, { isLoading: true });
      const categories = await lastValueFrom(categoryService.getCategories());
      patchState(store, { isLoading: false, categories });
    },
  }))
);
