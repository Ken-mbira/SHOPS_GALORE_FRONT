import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';

import { NotFoundComponent } from './components/not-found/not-found.component';

import { LoggedGuard } from './guards/logged.guard';

const routes: Routes = [
  { path: 'auth', loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule) },
  {
    path: '',
    redirectTo: 'customer',
    pathMatch: 'full'
  },
  { 
    path: 'customer',
    loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule,)
  },
  {
    path: 'store_owner',
    loadChildren: () => import('./seller/seller.module').then(m => m.SellerModule),
    canActivate:[LoggedGuard]
  },
  {
    path: 'delivery',
    loadChildren: () => import('./delivery/delivery.module').then(m => m.DeliveryModule),
    canActivate:[LoggedGuard]
  },
  { 
    path: 'staff',
    loadChildren: () => import('./staff/staff.module').then(m => m.StaffModule),
    canActivate:[LoggedGuard]
  },
  {
    path: 'buyer',
    loadChildren: () => import('./buyer/buyer.module').then(m => m.BuyerModule),
    canActivate:[LoggedGuard]
  },
  { path: '**', component: NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
