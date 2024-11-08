import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Product } from './product.model';

export const productActionsAPI = createActionGroup({
  source: 'Product',
  events: {
    'Load Products Success': props<{ products: Product[] }>(),
    'Load Products Failure': props<{ error: unknown }>(),
  },
});

export const productActions = createActionGroup({
  source: 'Product',
  events: {
    load: props<{ category: string }>(),
    loadAll: emptyProps(),
    select: props<{ products: Product[] }>(),
  },
});
