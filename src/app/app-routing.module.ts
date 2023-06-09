import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HeaderComponent } from './header/header.component';
import { InventoryComponent } from './inventory/inventory.component';
import { PaymentComponent } from './payment/payment.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { BookSeatComponent } from './book-seat/book-seat.component';

import { QrScannerComponent } from './qr-scanner/qr-scanner.component';
const routes: Routes = [
  { path: '', redirectTo: '/bookSeat', pathMatch: 'full' },
  {path: 'menu' , component: InventoryComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'cart', component: CartComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'thanks', component: ThankYouComponent },
  { path: 'bookSeat', component: BookSeatComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'menu/:id', component: InventoryComponent },
  { path: 'qrScanner', component: QrScannerComponent },
]




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
