import { createFeature, createReducer, on } from '@ngrx/store';
import { productActions, productActionsAPI } from './product.action';
import { Product } from './product.model';

interface State {
  products: Product[];
  isLoading: boolean;
  error: unknown;
  count: number;
}

const initialState: State = {
  products: [],
  isLoading: false,
  count: 0,
  error: undefined,
};

const reducer = createReducer(
  initialState,
  on(productActions.load, (state) => ({
    ...state,
    error: undefined,
    isLoading: true,
  })),
  on(productActions.loadAll, (state) => ({
    ...state,
    error: undefined,
    isLoading: true,
  })),
  on(productActionsAPI.loadProductsSuccess, (state, { products }) => {
    return {
      ...state,
      products,
      count: products.length,
      isLoading: false,
      error: undefined,
    };
  }),
  on(productActionsAPI.loadProductsFailure, (state, { error }) => {
    return {
      ...state,
      count: 0,
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
