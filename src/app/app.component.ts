import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from '@es-libs/home/feature/layout';

@Component({
  standalone: true,
  imports: [RouterModule, LayoutComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'nx-angular-eshop';
}
