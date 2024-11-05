import { JsonPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from '@es-libs/home/feature/layout';
import {
  CategoryActions,
  selectCategories,
} from '@es-libs/product/data-access/category';
import { Store } from '@ngrx/store';

@Component({
  standalone: true,
  imports: [RouterModule, LayoutComponent, JsonPipe],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  store = inject(Store);
  categories_ = this.store.selectSignal(selectCategories);

  ngOnInit(): void {
    this.store.dispatch(CategoryActions.getCategories());
  }
}
