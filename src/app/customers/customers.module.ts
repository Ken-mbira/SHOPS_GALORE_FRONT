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
import { SingleProductComponent } from './single-product/single-product.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';
import { ShopFocusComponent } from './shop-focus/shop-focus.component';
import { OrdersComponent } from './orders/orders.component';
import { SearchResultsComponent } from './search-results/search-results.component';

import { CustomAngularMaterialModule } from '../custom-angular-material/custom-angular-material.module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ImagesComponent } from './single-product/images/images.component';
import { WithVariationsComponent } from './single-product/with-variations/with-variations.component';
import { WithoutVariationsComponent } from './single-product/without-variations/without-variations.component';
import { ProductDescriptionComponent } from './single-product/product-description/product-description.component';
import { ShopInformationComponent } from './single-product/shop-information/shop-information.component';
import { MainCategoryComponent } from './main-category/main-category.component';
import { ChildrenCategoriesComponent } from './main-category/children-categories/children-categories.component';
import { ProductListComponent } from './product-list/product-list.component';


@NgModule({
  declarations: [
    CustomersComponent,
    NavbarComponent,
    LandingComponent,
    CategoryComponent,
    SliderComponent,
    ServiceSliderComponent,
    FeaturedProductsComponent,
    SingleProductComponent,
    CartPageComponent,
    CheckoutPageComponent,
    ShopFocusComponent,
    OrdersComponent,
    SearchResultsComponent,
    SidenavComponent,
    ImagesComponent,
    WithVariationsComponent,
    WithoutVariationsComponent,
    ProductDescriptionComponent,
    ShopInformationComponent,
    MainCategoryComponent,
    ChildrenCategoriesComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    CustomersRoutingModule,
    MdbCarouselModule,
    CustomAngularMaterialModule
  ]
})
export class CustomersModule { }
