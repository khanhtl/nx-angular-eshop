import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MainNavComponent } from '../main-nav/main-nav.component';

@Component({
  selector: 'es-libs-home-layout',
  standalone: true,
  imports: [MainNavComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {}
