import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SellerMainComponent } from './seller-main/seller-main.component';
import { DashboardComponent } from './seller-main/dashboard/dashboard.component';
import { ShopsComponent } from './seller-main/shops/shops.component';

import { SellerShopComponent } from './seller-shop/seller-shop.component';
import { ShopDashboardComponent } from './seller-shop/shop-dashboard/shop-dashboard.component';
import { ShopNotificationsComponent } from './seller-shop/shop-notifications/shop-notifications.component';
import { ShopOrdersComponent } from './seller-shop/shop-orders/shop-orders.component';
import { ShopProductsComponent } from './seller-shop/shop-products/shop-products.component';
import { ShopSettingsComponent } from './seller-shop/shop-settings/shop-settings.component';

import { SingleShopProductComponent } from './seller-shop/single-shop-product/single-shop-product.component';
import { ShopOrderDetailComponent } from './seller-shop/shop-orders/shop-order-detail/shop-order-detail.component';

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
  {
    path: 'shop',
    component:SellerShopComponent,
    children: [
      { path: '', component:ShopDashboardComponent },
      { path: 'notifications', component:ShopNotificationsComponent },
      {path: 'orders',component:ShopOrdersComponent},
      { path: 'orders/:id', component:ShopOrderDetailComponent},
      { path: 'products', component:ShopProductsComponent },
      { path: 'products/:id', component:SingleShopProductComponent },
      { path: 'settings', component:ShopSettingsComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellerRoutingModule { }
