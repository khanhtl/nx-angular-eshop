import { Component, inject, OnInit } from '@angular/core';
import { LayoutComponent } from '@es-libs/home/feature/layout';
import { categoryActions } from '@es-libs/product/data-access/category';
import { Store } from '@ngrx/store';

@Component({
  standalone: true,
  imports: [LayoutComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  store = inject(Store);

  ngOnInit(): void {
    this.store.dispatch(categoryActions.load());
  }
}
