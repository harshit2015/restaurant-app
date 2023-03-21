import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookSeatComponent } from './book-seat/book-seat.component';
import { HeaderComponent } from './header/header.component';
import { InventoryComponent } from './inventory/inventory.component';
import { QrScannerComponent } from './qr-scanner/qr-scanner.component';

const routes: Routes = [
  { path: 'bookSeat', component: BookSeatComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'menu/:id', component: InventoryComponent },
  { path: 'qrScanner', component: QrScannerComponent },
  { path: '', component: BookSeatComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
