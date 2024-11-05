import { createActionGroup, props } from '@ngrx/store';
import { Product } from './product.model';

export const productActionsAPI = createActionGroup({
  source: 'Product',
  events: {
    'Get Products For Category Success': props<{ products: Product[] }>(),
    'Get Products For Category Failure': props<{ error: unknown }>(),
  },
});

export const productActions = createActionGroup({
  source: 'Product',
  events: {
    load: props<{ category: string }>(),
    select: props<{ products: Product[] }>(),
  },
});
