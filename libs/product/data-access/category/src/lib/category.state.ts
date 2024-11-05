import { createFeature, createReducer, on } from '@ngrx/store';
import { categoryActions, categoryActionsAPI } from './category.action';

export interface State {
  categories: string[];
  currentCategory: string;
  isLoading: boolean;
  error: unknown;
}

const initialState: State = {
  categories: [],
  currentCategory: '',
  error: undefined,
  isLoading: false,
};

const reducer = createReducer(
  initialState,
  on(categoryActions.load, (state) => ({
    ...state,
    error: undefined,
    isLoading: true,
  })),

  on(categoryActionsAPI.getCategoriesSuccess, (state, { categories }) => {
    return {
      ...state,
      categories,
      isLoading: false,
      error: undefined,
    };
  }),
  on(categoryActionsAPI.getCategoriesFailure, (state, { error }) => {
    return {
      ...state,
      categories: [],
      isLoading: false,
      error,
    };
  })
);

export const categoryFeature = createFeature({
  name: 'category',
  reducer,
});
