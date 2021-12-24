import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel'

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingComponent } from './landing/landing.component';
import { CategoryComponent } from './landing/category/category.component';
import { SliderComponent } from './landing/slider/slider.component';


import { CarouselModule } from 'ngx-owl-carousel-o';
import { ServiceSliderComponent } from './landing/service-slider/service-slider.component';
import { FeaturedProductsComponent } from './landing/featured-products/featured-products.component';
import { CategoriesComponent } from './landing/categories/categories.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';
import { ShopFocusComponent } from './shop-focus/shop-focus.component';
import { OrdersComponent } from './orders/orders.component';
import { SearchResultsComponent } from './search-results/search-results.component';


@NgModule({
  declarations: [
    CustomersComponent,
    NavbarComponent,
    LandingComponent,
    CategoryComponent,
    SliderComponent,
    ServiceSliderComponent,
    FeaturedProductsComponent,
    CategoriesComponent,
    SingleProductComponent,
    CartPageComponent,
    CheckoutPageComponent,
    ShopFocusComponent,
    OrdersComponent,
    SearchResultsComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    CustomersRoutingModule,
    MdbCarouselModule,
  ]
})
export class CustomersModule { }
