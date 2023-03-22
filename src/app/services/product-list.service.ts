import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
@Injectable({
  providedIn: 'root'
})
export class ProductListService {
  totalPrice:number=0;
  listOfProducts:Product[]=[{itemName :"product 1",itemQuantity:2,itemPrice:200,itemDescription:"",itemImage:""},
  {itemName :"product 1",itemQuantity:2,itemPrice:200,itemDescription:"",itemImage:""},
  {itemName :"product 2",itemQuantity:2,itemPrice:200,itemDescription:"",itemImage:""},
  {itemName :"product 3",itemQuantity:2,itemPrice:200,itemDescription:"",itemImage:""},
  {itemName :"product 4",itemQuantity:2,itemPrice:200,itemDescription:"",itemImage:""}
  ];
  constructor() { }

  getAllProductsDetails(){
    return this.listOfProducts;
  }

  getToltalPriceOfProducts(){
    this.listOfProducts.forEach(item =>{
      this.totalPrice=this.totalPrice+(item.itemPrice*item.itemQuantity);
    })
    return this.totalPrice;
  }
}
