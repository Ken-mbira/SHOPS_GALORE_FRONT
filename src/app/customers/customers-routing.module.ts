import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './customers.component';

import { LandingComponent } from './landing/landing.component';
import { SingleProductComponent } from './single-product/single-product.component';

const routes: Routes = [
  { path: "", redirectTo:"dashboard"},
  { 
    path: '', 
    component:CustomersComponent,
    children : [
      { path: 'dashboard',component: LandingComponent },
      { path: 'product/:id',component:SingleProductComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
