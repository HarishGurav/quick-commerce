import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { MenusComponent } from '../menus/menus.component';
import { RouterOutlet } from '@angular/router';
import { CorouselComponent } from '../../components/corousel/corousel.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,MenusComponent,RouterOutlet,CorouselComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
