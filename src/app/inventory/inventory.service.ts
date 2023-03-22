import { Injectable, Injector } from "@angular/core";
import { Product } from "../models/Product";

@Injectable({ providedIn: 'root'})
export class InventoryService {

    menuItems: Product[] = [
        { itemName: "Pizza",  itemDescription: "lorem ipsum", itemPrice: 10, itemImage: 'https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062__480.jpg', itemQuantity: 0, },
        { itemName: "Burger",  itemDescription: "lorem ipsum", itemPrice: 8, itemImage: 'https://cdn.pixabay.com/photo/2014/10/19/20/59/hamburger-494706__480.jpg', itemQuantity: 0 },
        { itemName: "Sandwich",itemDescription: "lorem ipsum", itemPrice: 6, itemImage: 'https://cdn.pixabay.com/photo/2015/02/04/06/50/sandwiches-623388__480.jpg',itemQuantity: 0 },
        { itemName: "Salad",itemDescription: "lorem ipsum", itemPrice: 5,   itemImage: 'https://cdn.pixabay.com/photo/2017/10/09/19/29/eat-2834549__480.jpg',itemQuantity: 0 },
        { itemName: "Coffee",itemDescription: "lorem ipsum", itemPrice: 5,   itemImage:'https://cdn.pixabay.com/photo/2017/09/04/18/39/coffee-2714970__480.jpg',itemQuantity: 0}
      ];
    
    private cart: Product[] = [];

  constructor() { }

  getMenu(): Product[] {
    return this.menuItems;
  }

  getCart(): Product[] {
    return this.cart;
  }

  addToCart(item: Product) {
    this.cart.push(item);
  }

  removeFromCart(index: number) {
    let tempName = this.cart[index].itemName;
    this.menuItems.forEach((name) => {
        if(name.itemName == tempName) {
            name.itemQuantity = 0;
        }
    });

    // for(let i=0; i<this.menuItems.length; i++) {
    //     if(index == i) {
    //         this.menuItems[i].itemQuantity = 0;
    //     }
    // }
    this.cart.splice(index, 1);
  }

}