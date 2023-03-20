import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { InventoryComponent } from './inventory/inventory.component';

const routes: Routes = [
  { path: 'header', component: HeaderComponent },
  { path: 'menu', component: InventoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
