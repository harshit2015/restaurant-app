import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookSeatComponent } from './book-seat/book-seat.component';
import { HeaderComponent } from './header/header.component';
import { InventoryComponent } from './inventory/inventory.component';

const routes: Routes = [
  { path: 'bookSeat', component: BookSeatComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'menu', component: InventoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
