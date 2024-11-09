import { JsonPipe } from '@angular/common';
import {
  Component,
  computed,
  effect,
  inject,
  Injector,
  input,
  runInInjectionContext,
} from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ProductService } from '@es-libs/product/data-access/product';
import { ProductCardComponent } from '@es-libs/product/ui/components';
import { injectQuery } from '@tanstack/angular-query-experimental';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'es-libs-product',
  standalone: true,
  imports: [JsonPipe, ProductCardComponent, MatProgressSpinnerModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  productService = inject(ProductService);
  injector = inject(Injector);
  category = input<string>();

  queryKey = computed(() => {
    return this.category() ? ['products', this.category()] : ['products'];
  });
  queryFn = computed(() => {
    return this.category()
      ? () =>
          lastValueFrom(
            this.productService.getProductsForCategory(this.category()!)
          )
      : () => lastValueFrom(this.productService.getProducts());
  });

  createProductQuery() {
    return injectQuery(() => ({
      queryKey: this.queryKey(),
      queryFn: this.queryFn(),
      staleTime: Infinity,
      gcTime: Infinity,
    }));
  }
  query = this.createProductQuery();
  products_ = this.query.data;
  status_ = this.query.status;
  error_ = this.query.error;

  constructor() {
    effect(() => {
      runInInjectionContext(this.injector, () => {
        this.query = this.createProductQuery();
      });
    });
  }
}
