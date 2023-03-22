import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InventoryComponent } from './inventory/inventory.component';
import { HeaderComponent } from './header/header.component';
import { PaymentComponent } from './payment/payment.component';
import { ProductListService } from './services/product-list.service';
import { CartComponent } from './cart/cart.component';
import { InventoryService } from './inventory/inventory.service';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { BookSeatComponent } from './book-seat/book-seat.component';
import { ReactiveFormsModule } from '@angular/forms';
import { QrScannerComponent } from './qr-scanner/qr-scanner.component';
import { ZXingScannerModule } from '@zxing/ngx-scanner';

@NgModule({
  declarations: [
    AppComponent,
    InventoryComponent,
    HeaderComponent,
    PaymentComponent,
    CartComponent,
    ThankYouComponent,
    BookSeatComponent,
    QrScannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ZXingScannerModule
  ],
  providers: [InventoryService,ProductListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
