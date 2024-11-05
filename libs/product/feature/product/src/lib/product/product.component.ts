import { JsonPipe } from '@angular/common';
import { Component, inject, input, OnInit } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import {
  productActions,
  productFeature,
} from '@es-libs/product/data-access/product';
import { Store } from '@ngrx/store';
import { filter } from 'rxjs';

@Component({
  selector: 'es-libs-product',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  store = inject(Store);
  category = input.required<string>();
  category$ = toObservable(this.category);

  products_ = this.store.selectSignal(productFeature.selectProducts);
  isLoading_ = this.store.selectSignal(productFeature.selectIsLoading);
  error_ = this.store.selectSignal(productFeature.selectError);
  ngOnInit(): void {
    this.category$
      .pipe(filter((category: string) => !!category))
      .subscribe((category: string) => {
        console.log(category);

        this.store.dispatch(productActions.load({ category }));
      });
  }
}
