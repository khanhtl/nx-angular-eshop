import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from '@es-libs/home/feature/layout';
import {
  getCategoryActions,
  selectCategories,
} from '@es-libs/product/data-access/category';
import { Store } from '@ngrx/store';

@Component({
  standalone: true,
  imports: [RouterModule, LayoutComponent, JsonPipe, AsyncPipe],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  store = inject(Store);
  categories$ = this.store.select(selectCategories);
  categories_ = toSignal(this.categories$);

  ngOnInit(): void {
    this.store.dispatch(getCategoryActions());
  }
}
