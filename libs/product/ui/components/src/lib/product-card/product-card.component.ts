import { Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Product } from '@es-libs/product/data-access/product';

@Component({
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  selector: 'es-libs-product-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  product = input.required<Product>();
}
