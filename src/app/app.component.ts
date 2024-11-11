import { Component, inject, OnInit } from '@angular/core';
import { LayoutComponent } from '@es-libs/home/feature/layout';
import { CategoryStore } from '@es-libs/product/data-access/category';

@Component({
  standalone: true,
  imports: [LayoutComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [CategoryStore],
})
export class AppComponent implements OnInit {
  readonly categoryStore = inject(CategoryStore);

  ngOnInit(): void {
    this.categoryStore.load();
  }
}
