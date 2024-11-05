import { createSelector } from '@ngrx/store';
import { CategoryState } from './category.reducer';

export const selectCategoryState = ({
  category,
}: {
  category: CategoryState;
}) => category;
export const selectCategories = createSelector(
  selectCategoryState,
  (state: CategoryState) => state.categories
);
export const selectError = createSelector(
  selectCategoryState,
  (state: CategoryState) => state.error
);
