import { JsonPipe } from '@angular/common';
import { Component, inject, input, OnInit } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ProductStore } from '@es-libs/product/data-access/product';
import { ProductCardComponent } from '@es-libs/product/ui/components';

@Component({
  selector: 'es-libs-product',
  standalone: true,
  imports: [JsonPipe, ProductCardComponent, MatProgressSpinnerModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  providers: [ProductStore],
  host: {
    '[class.loading]': 'store.isLoading()',
  },
})
export class ProductComponent implements OnInit {
  readonly store = inject(ProductStore);
  category = input<string>('');
  ngOnInit(): void {
    this.store.loadByCategory(this.category);
  }
}
