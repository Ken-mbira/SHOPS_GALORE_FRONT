import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SellerMainComponent } from './seller-main/seller-main.component';
import { DashboardComponent } from './seller-main/dashboard/dashboard.component';
import { ShopsComponent } from './seller-main/shops/shops.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard'},
  {
    path: '',
    component:SellerMainComponent,
    children: [
      { path: 'dashboard', component:DashboardComponent},
      { path: 'shops', component:ShopsComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellerRoutingModule { }
