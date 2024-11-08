import { JsonPipe } from '@angular/common';
import { Component, inject, input, OnInit } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {
  productActions,
  productFeature,
} from '@es-libs/product/data-access/product';
import { ProductCardComponent } from '@es-libs/product/ui/components';
import { Store } from '@ngrx/store';

@Component({
  selector: 'es-libs-product',
  standalone: true,
  imports: [JsonPipe, ProductCardComponent, MatProgressSpinnerModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  host: {
    '[class.loading]': 'isLoading_()',
  },
})
export class ProductComponent implements OnInit {
  store = inject(Store);
  category = input<string>();
  category$ = toObservable(this.category);

  products_ = this.store.selectSignal(productFeature.selectProducts);
  isLoading_ = this.store.selectSignal(productFeature.selectIsLoading);
  error_ = this.store.selectSignal(productFeature.selectError);
  ngOnInit(): void {
    this.category$.subscribe((category?: string) => {
      if (category) {
        this.store.dispatch(productActions.load({ category }));
      } else {
        this.store.dispatch(productActions.loadAll());
      }
    });
  }
}
