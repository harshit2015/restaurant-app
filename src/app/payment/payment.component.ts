import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InventoryService } from '../inventory/inventory.service';
import { Product } from '../models/Product';
import { ProductListService } from '../services/product-list.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit{
  products:Product[]=[];
  upiMode=true;
  totalPrice:number=0;
  constructor(private productService:ProductListService,private router: Router,private inventoryService:InventoryService) {}

  ngOnInit(): void {
    this.products=this.inventoryService.getCart();
    this.getTotalPriceOfProducts();
  }

  getTotalPriceOfProducts(){
    this.totalPrice=this.inventoryService.getToltalPriceOfProducts();
  }
  payNow(){
    window.alert("Payment Done");
    this.router.navigate(['/thanks']);
  }
  onItemChange(e:any){
    if(e.target.value=="UPI"){
      this.upiMode=false;
    }else{
      this.upiMode=true;
    }
    console.log(e.target.value);
  }
}
