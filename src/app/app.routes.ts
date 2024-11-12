import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'product',
    pathMatch: 'full',
  },
  {
    path: 'product',
    loadComponent: () =>
      import('@es-libs/product/feature/product').then(
        (m) => m.ProductComponent
      ),
  },
  {
    path: 'category/:category',
    loadComponent: () =>
      import('@es-libs/product/feature/product').then(
        (m) => m.ProductComponent
      ),
  },
  {
    path: 'cart',
    loadComponent: () =>
      import('@es-libs/cart/feature/cart').then((m) => m.CartComponent),
  },
];
