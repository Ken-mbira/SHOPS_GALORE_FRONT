import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

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

import { AuthInterceptor } from '../interceptors/auth.interceptor';
import { LoaderInterceptor } from '../interceptors/loader/loader.interceptor';
import { ShopService } from './services/shop.service';
import { LocationService } from '../services/location/location.service';
import { NewShopComponent } from './seller-main/new-shop/new-shop.component';
import { NewShopFormComponent } from './seller-main/new-shop/new-shop-form/new-shop-form.component';
import { SelectLocationComponent } from './seller-main/new-shop/select-location/select-location.component';
import { VariationChoiceComponent } from './seller-shop/new-shop-product/variation-choice/variation-choice.component';
import { HasVariationFormComponent } from './seller-shop/new-shop-product/has-variation-form/has-variation-form.component';
import { NoVariationFormComponent } from './seller-shop/new-shop-product/no-variation-form/no-variation-form.component';
import { SuccessComponent } from './seller-shop/new-shop-product/success/success.component';
import { ListService } from '../services/lists/list.service';
import { ProductService } from '../services/product/product.service';
import { ProductListComponent } from './seller-shop/product-list/product-list.component';


@NgModule({
  providers: [
    ShopService,
    LocationService,
    ListService,
    ProductService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true,
    },

  ],
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
    SingleProductDetailsComponent,
    NewShopComponent,
    NewShopFormComponent,
    SelectLocationComponent,
    VariationChoiceComponent,
    HasVariationFormComponent,
    NoVariationFormComponent,
    SuccessComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule,
    SellerRoutingModule,
    CustomAngularMaterialModule
  ]
})
export class SellerModule { }
