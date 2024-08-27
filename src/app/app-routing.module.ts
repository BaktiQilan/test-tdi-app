import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './catalog/catalog.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { CartComponent } from './cart/cart.component';
import { TransactionComponent } from './transaction/transaction.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
  // { path: '', redirectTo: '/catalog', pathMatch: 'full' },
  {
    path: '', component: CartComponent,
    children: [
      {
        path: '',
        component: CatalogComponent
      },
      {
        path: 'checkout',
        component: CheckoutComponent
      },
      { path: 'item-detail/:id', component: ItemDetailComponent },
    ]
  },
  // { path: 'item-detail/:id', component: ItemDetailComponent },
  { path: 'transaction', component: TransactionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
