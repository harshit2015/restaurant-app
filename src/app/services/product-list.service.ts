import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ProductListService {
  totalPrice:number=0;
  listOfProducts=[{name :"product 1",quantity:2,price:200},
  {name :"product 1",quantity:2,price:200},
  {name :"product 2",quantity:2,price:200},
  {name :"product 3",quantity:2,price:200},
  {name :"product 4",quantity:2,price:200}
  ];
  constructor() { }

  getAllProductsDetails(){
    return this.listOfProducts;
  }

  getToltalPriceOfProducts(){
    this.listOfProducts.forEach(item =>{
      console.log(item);
    })
    return this.totalPrice;
  }
}
