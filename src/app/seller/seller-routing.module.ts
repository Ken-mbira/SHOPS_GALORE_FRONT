import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SellerComponent } from './seller.component';

import { SellerMainComponent } from './seller-main/seller-main.component';
import { DashboardComponent } from './seller-main/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo:'main' },
  {
    path: 'main',
    component:SellerMainComponent,
    children: [
      { path: 'dashboard', component:DashboardComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellerRoutingModule { }
