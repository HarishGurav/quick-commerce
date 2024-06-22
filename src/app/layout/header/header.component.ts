import { Component } from '@angular/core';
import { BsModalRef, BsModalService } from "ngx-bootstrap/modal";
import { CartComponent } from '../../components/cart/cart.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CartComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  providers:[BsModalService]
})
export class HeaderComponent {
  modalRef?: BsModalRef;

  constructor(private bsModalService:BsModalService){


  }

  openCart(){
    this.modalRef=this.bsModalService.show(CartComponent)

  }

}
