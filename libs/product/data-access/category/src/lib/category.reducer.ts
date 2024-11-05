import { createReducer, on } from '@ngrx/store';
import { CategoryActions } from './category.action';

export interface CategoryState {
  categories: string[];
  currentCategory: string;
  error: string;
}

const initialState: CategoryState = {
  categories: [],
  currentCategory: '',
  error: '',
};

export const categoryReducer = createReducer(
  initialState,
  on(CategoryActions.getCategoriesSuccess, (state, { categories }) => {
    return {
      ...state,
      categories: categories,
      error: '',
    };
  }),
  on(CategoryActions.getCategoriesFailure, (state, { error }) => {
    return {
      ...state,
      categories: [],
      error: error,
    };
  })
);
