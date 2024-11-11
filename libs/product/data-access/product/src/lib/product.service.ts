import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly http = inject(HttpClient);

  getProducts() {
    return lastValueFrom(
      this.http.get<Product[]>(`https://fakestoreapi.com/products`)
    );
  }

  getByCategory(category?: string) {
    return category
      ? this.http.get<Product[]>(
          `https://fakestoreapi.com/products/category/${category}`
        )
      : this.http.get<Product[]>(`https://fakestoreapi.com/products`);
  }

  getProductsForCategory(category: string) {
    return this.http.get<Product[]>(
      `https://fakestoreapi.com/products/category/${category}`
    );
  }
}
