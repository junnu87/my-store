import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items;
  checkoutForm;
  
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder) {
      this.items = this.cartService.getItems();

      this.checkoutForm = this.formBuilder.group({
        name: '',
        address: ''
      });
     }

  ngOnInit(): void {
  }

onSubmit(customerData) {
  this.items = this.cartService.clearCart();
  console.warn('Your order has been submitted', customerData);
  this.checkoutForm.reset();
}  

}
