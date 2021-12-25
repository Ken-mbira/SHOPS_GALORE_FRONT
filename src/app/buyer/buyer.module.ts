import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuyerRoutingModule } from './buyer-routing.module';
import { BuyerComponent } from './buyer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { OrderHistoryComponent } from './order-history/order-history.component';

import { CustomAngularMaterialModule } from '../custom-angular-material/custom-angular-material.module';


@NgModule({
  declarations: [
    BuyerComponent,
    NavbarComponent,
    SidenavComponent,
    DashboardComponent,
    WishlistComponent,
    OrderHistoryComponent,
  ],
  imports: [
    CommonModule,
    BuyerRoutingModule,
    CustomAngularMaterialModule

  ]
})
export class BuyerModule { }
