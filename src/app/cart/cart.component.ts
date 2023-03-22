import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InventoryService } from '../inventory/inventory.service';
import { Product } from '../models/Product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  cartItems: Product[] = [];

  constructor(private router: Router, private inventoryService: InventoryService) {
    this.cartItems = this.inventoryService.getCart();
  }

  deleteItem(index: any) {
    this.inventoryService.removeFromCart(index);
  }

  moveToPaymentPage(){
    console.log("works!!");
  }

  continueShopping(): void {
    this.router.navigateByUrl('/menu');
 }
}
