import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit{
  products=[{name :"product 1",quantity:2,price:200},
  {name :"product 1",quantity:2,price:200},
  {name :"product 1",quantity:2,price:200}
];
  constructor() { }

  ngOnInit(): void {
  }
  payNow(){
    console.log("paid");
  }
}
