import { createSelector } from '@ngrx/store';
import { CategoryState } from './category.reducer';

export const selectCategoryState = (state: any) => state.category;
export const selectCategories = createSelector(
  selectCategoryState,
  (state: CategoryState) => state.categories
);
export const selectError = createSelector(
  selectCategoryState,
  (state: CategoryState) => state.error
);
