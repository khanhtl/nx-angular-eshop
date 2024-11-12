import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Cart } from './cart.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private readonly http = inject(HttpClient);

  getCarts() {
    return this.http.get<Cart[]>('https://fakestoreapi.com/carts');
  }
}
