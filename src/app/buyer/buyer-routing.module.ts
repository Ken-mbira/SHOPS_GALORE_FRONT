import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyerComponent } from './buyer.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { OrderHistoryComponent } from './order-history/order-history.component';

const routes: Routes = [
  { path:"", redirectTo:"dashboard"},
  { path: '', component: BuyerComponent,
    children: [
      { path:"dashboard",component:DashboardComponent },
      { path:"wishlist",component:WishlistComponent },
      { path:"orders",component:OrderHistoryComponent },
    ]  
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuyerRoutingModule { }
