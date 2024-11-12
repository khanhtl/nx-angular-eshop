import { ProductCart } from './product-cart.model';

export interface Cart {
  id: number;
  userId: number;
  date: string;
  products: ProductCart[];
}
