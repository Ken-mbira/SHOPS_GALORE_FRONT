import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingComponent } from './landing/landing.component';
import { CategoryComponent } from './landing/category/category.component';
import { SliderComponent } from './landing/slider/slider.component';


import { CarouselModule } from 'ngx-owl-carousel-o';
import { ServiceSliderComponent } from './landing/service-slider/service-slider.component';
import { FeaturedProductsComponent } from './landing/featured-products/featured-products.component';


@NgModule({
  declarations: [
    CustomersComponent,
    NavbarComponent,
    LandingComponent,
    CategoryComponent,
    SliderComponent,
    ServiceSliderComponent,
    FeaturedProductsComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    CustomersRoutingModule
  ]
})
export class CustomersModule { }
