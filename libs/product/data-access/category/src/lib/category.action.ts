import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const categoryActionsAPI = createActionGroup({
  source: 'Categories API',
  events: {
    'Get Categories Success': props<{ categories: string[] }>(),
    'Get Categories Failure': props<{ error: unknown }>(),
  },
});

export const categoryActions = createActionGroup({
  source: 'Categories',
  events: {
    load: emptyProps(),
    select: props<{ categories: string[] }>(),
  },
});
