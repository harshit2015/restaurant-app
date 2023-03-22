import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../models/Product';
import { InventoryService } from './inventory.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent{
  menu: Product[];

  constructor(private inventoryService: InventoryService,private router:Router) {
      this.menu = this.inventoryService.getMenu();
  }


  decreaseQuantity(item: any) {
    if (item.itemQuantity > 0) {
      item.itemQuantity--;
    }
  }

  increaseQuantity(item: any) {
    item.itemQuantity++;
    
  }

  addToCart(item: Product) {
    console.log("Adding to cart: ", item);
    this.inventoryService.addToCart(item);
  }

}
