import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private productService:ProductListService,private router: Router) {}

  ngOnInit(): void {
    this.products=this.productService.getAllProductsDetails();
    this.getTotalPriceOfProducts();
  }

  getTotalPriceOfProducts(){
    this.totalPrice=this.productService.getToltalPriceOfProducts();
  }
  payNow(){
    window.alert("Payment Done");
    this.router.navigate(['']);
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
