import { createFeature, createReducer, on } from '@ngrx/store';
import { productActions, productActionsAPI } from './product.action';
import { Product } from './product.model';

interface State {
  products: Product[];
  isLoading: boolean;
  error: unknown;
}

const initialState: State = {
  products: [],
  isLoading: false,
  error: undefined,
};

const reducer = createReducer(
  initialState,
  on(productActions.load, (state) => ({
    ...state,
    error: undefined,
    isLoading: true,
  })),
  on(productActionsAPI.getProductsForCategorySuccess, (state, { products }) => {
    return {
      ...state,
      products,
      isLoading: false,
      error: undefined,
    };
  }),
  on(productActionsAPI.getProductsForCategoryFailure, (state, { error }) => {
    return {
      ...state,
      isLoading: false,
      products: [],
      error,
    };
  })
);

export const productFeature = createFeature({
  name: 'product',
  reducer,
});
