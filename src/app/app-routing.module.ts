import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'auth', loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule) },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
  { path: 'seller', loadChildren: () => import('./seller/seller.module').then(m => m.SellerModule) },
  { path: 'delivery', loadChildren: () => import('./delivery/delivery.module').then(m => m.DeliveryModule) },
  { path: 'staff', loadChildren: () => import('./staff/staff.module').then(m => m.StaffModule) },
  { path: 'buyer', loadChildren: () => import('./buyer/buyer.module').then(m => m.BuyerModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
