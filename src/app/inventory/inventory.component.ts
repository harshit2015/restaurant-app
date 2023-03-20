import { Component } from '@angular/core';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent {
  menuItems = [
    { name: "Pizza", price: 10.99, quantity: 0, description: "lorem ipsum", image: 'https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062__480.jpg' },
    { name: "Burger", price: 8.99, quantity: 0, description: "lorem ipsum", image: 'https://cdn.pixabay.com/photo/2014/10/19/20/59/hamburger-494706__480.jpg' },
    { name: "Sandwich", price: 6.99, quantity: 0, description: "lorem ipsum", image: 'https://cdn.pixabay.com/photo/2015/02/04/06/50/sandwiches-623388__480.jpg' },
    { name: "Salad", price: 5.99, quantity: 0, description: "lorem ipsum", image: 'https://cdn.pixabay.com/photo/2017/10/09/19/29/eat-2834549__480.jpg' },
    { name: "Coffee", price: 5.99, quantity: 0, description: "lorem ipsum", image:'https://cdn.pixabay.com/photo/2017/09/04/18/39/coffee-2714970__480.jpg'}
  ];
  cartItems: any = [];

  decreaseQuantity(item: any) {
    if (item.quantity > 0) {
      item.quantity--;
    }
  }

  increaseQuantity(item: any) {
    item.quantity++;
  }

  addToCart(itemName: string, itemPrice: number, itemQuantity: number) {
    let item = {itemName, itemPrice, itemQuantity};
    console.log("Adding to cart: ", item);
    this.cartItems.push(item);
    let found: any = this.menuItems.find((obj) => { return obj.name == itemName; });
    found.quantity = 0;
  }
}
