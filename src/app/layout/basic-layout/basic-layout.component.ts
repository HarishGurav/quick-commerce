import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { MainComponent } from '../main/main.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-basic-layout',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,MainComponent,RouterOutlet],
  templateUrl: './basic-layout.component.html',
  styleUrl: './basic-layout.component.scss'
})
export class BasicLayoutComponent {

}
