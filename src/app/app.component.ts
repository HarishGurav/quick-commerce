import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainComponent } from './layout/main/main.component';
import { BasicLayoutComponent } from './layout/basic-layout/basic-layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,BasicLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'e-commerce';
}
