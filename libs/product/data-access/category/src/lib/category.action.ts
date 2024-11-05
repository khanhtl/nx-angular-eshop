import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const CategoryActions = createActionGroup({
  source: 'Category',
  events: {
    'Get Categories': emptyProps(),
    'Get Categories Success': props<{ categories: string[] }>(),
    'Get Categories Failure': props<{ error: string }>(),
  },
});
