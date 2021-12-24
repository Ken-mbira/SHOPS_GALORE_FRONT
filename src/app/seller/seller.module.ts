import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomAngularMaterialModule } from '../custom-angular-material/custom-angular-material.module';

import { SellerRoutingModule } from './seller-routing.module';
import { SellerComponent } from './seller.component';
import { SellerMainComponent } from './seller-main/seller-main.component';
import { SidenavComponent } from './seller-main/sidenav/sidenav.component';
import { NavbarComponent } from './seller-main/navbar/navbar.component';
import { DashboardComponent } from './seller-main/dashboard/dashboard.component';
import { ShopsComponent } from './seller-main/shops/shops.component';
import { SellerShopComponent } from './seller-shop/seller-shop.component';
import { ShopSidenavComponent } from './seller-shop/shop-sidenav/shop-sidenav.component';
import { ShopNavbarComponent } from './seller-shop/shop-navbar/shop-navbar.component';
import { ShopDashboardComponent } from './seller-shop/shop-dashboard/shop-dashboard.component';
import { ShopNotificationsComponent } from './seller-shop/shop-notifications/shop-notifications.component';
import { ShopOrdersComponent } from './seller-shop/shop-orders/shop-orders.component';
import { ShopProductsComponent } from './seller-shop/shop-products/shop-products.component';
import { ShopSettingsComponent } from './seller-shop/shop-settings/shop-settings.component';
import { ShopOrderDetailComponent } from './seller-shop/shop-orders/shop-order-detail/shop-order-detail.component';
import { SingleShopProductComponent } from './seller-shop/single-shop-product/single-shop-product.component';
import { NewShopProductComponent } from './seller-shop/new-shop-product/new-shop-product.component';
import { SingleProductMainComponent } from './seller-shop/single-shop-product/single-product-main/single-product-main.component';
import { SingleProductVariationsComponent } from './seller-shop/single-shop-product/single-product-variations/single-product-variations.component';
import { SingleProductDetailsComponent } from './seller-shop/single-shop-product/single-product-details/single-product-details.component';


@NgModule({
  declarations: [
    SellerComponent,
    SellerMainComponent,
    SidenavComponent,
    NavbarComponent,
    DashboardComponent,
    ShopsComponent,
    SellerShopComponent,
    ShopSidenavComponent,
    ShopNavbarComponent,
    ShopDashboardComponent,
    ShopNotificationsComponent,
    ShopOrdersComponent,
    ShopProductsComponent,
    ShopSettingsComponent,
    ShopOrderDetailComponent,
    SingleShopProductComponent,
    NewShopProductComponent,
    SingleProductMainComponent,
    SingleProductVariationsComponent,
    SingleProductDetailsComponent
  ],
  imports: [
    CommonModule,
    SellerRoutingModule,
    CustomAngularMaterialModule
  ]
})
export class SellerModule { }
