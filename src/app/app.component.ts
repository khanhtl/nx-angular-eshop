import { Component, inject, OnInit } from '@angular/core';
import { CartStore } from '@es-libs/cart/data-access/cart';
import { LayoutComponent } from '@es-libs/home/feature/layout';
import { CategoryStore } from '@es-libs/product/data-access/category';

@Component({
  standalone: true,
  imports: [LayoutComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [CategoryStore, CartStore],
})
export class AppComponent implements OnInit {
  readonly categoryStore = inject(CategoryStore);
  readonly cartStore = inject(CartStore);

  ngOnInit(): void {
    this.categoryStore.load();
    this.cartStore.load();
  }
}
