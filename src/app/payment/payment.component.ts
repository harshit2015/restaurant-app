import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductListService } from '../services/product-list.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit{
  products:any=[];
  constructor(private productService:ProductListService,private router: Router) {}

  ngOnInit(): void {
    this.products=this.productService.getAllProductsDetails();
  }
  payNow(){
    window.alert("Payment Done");
    this.router.navigate(['']);
  }
}
