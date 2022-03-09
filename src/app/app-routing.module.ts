import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from './components/not-found/not-found.component';

import { LoggedGuard } from './guards/logged.guard';
import { RoleGuard } from './guards/role.guard';
import { LoggedinGuard } from './guards/loggedin.guard';
import { HasroleGuard } from './guards/hasrole.guard'

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule),
    canActivate: [LoggedinGuard]
  },
  {
    path: '',
    redirectTo: 'customer',
    pathMatch: 'full'
  },
  { 
    path: 'customer',
    loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule,),
    canActivate: [RoleGuard],
    data: {
      role: 'customer'
    }
  },
  {
    path: 'store_owner',
    loadChildren: () => import('./seller/seller.module').then(m => m.SellerModule),
    canActivate:[LoggedGuard,RoleGuard],
    data: {
      role : 'store_owner'
    }
  },
  {
    path: 'delivery',
    loadChildren: () => import('./delivery/delivery.module').then(m => m.DeliveryModule),
    canActivate:[LoggedGuard,RoleGuard],
    data: {
      role : "delivery"
    }
  },
  { 
    path: 'staff',
    loadChildren: () => import('./staff/staff.module').then(m => m.StaffModule),
    canActivate:[LoggedGuard],
    data: {
      role : "staff"
    }
  },
  {
    path: 'buyer',
    loadChildren: () => import('./buyer/buyer.module').then(m => m.BuyerModule),
    // canActivate:[LoggedGuard],
    data: {
      role : "buyer"
    }
  },
  { path: '**', component: NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
