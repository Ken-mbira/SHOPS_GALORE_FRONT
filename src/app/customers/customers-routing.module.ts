import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './customers.component';

import { LandingComponent } from './landing/landing.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { ShopFocusComponent } from './shop-focus/shop-focus.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { OrdersComponent } from './orders/orders.component';
import { MainCategoryComponent } from './main-category/main-category.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';

const routes: Routes = [
  { path: "", redirectTo:"dashboard"},
  { 
    path: '', 
    component:CustomersComponent,
    children : [
      { path: 'dashboard',component: LandingComponent },
      { path: 'product/:id',component:SingleProductComponent },
      { path: 'shop/:id',component:ShopFocusComponent},
      { path: 'cart',component:CartPageComponent },
      { path: 'orders',component:OrdersComponent },
      { path: 'category/:id',component:MainCategoryComponent },
      { path: 'search-results/:phrase',component:SearchResultsComponent },
      { path: 'checkout',component:CheckoutPageComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
