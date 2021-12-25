import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffRoutingModule } from './staff-routing.module';
import { StaffComponent } from './staff.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DailyOrdersComponent } from './daily-orders/daily-orders.component';
import { IncomingComponent } from './incoming/incoming.component';
import { OutgoingComponent } from './outgoing/outgoing.component';

import { CustomAngularMaterialModule } from '../custom-angular-material/custom-angular-material.module';


@NgModule({
  declarations: [
    StaffComponent,
    NavbarComponent,
    SidenavComponent,
    DashboardComponent,
    DailyOrdersComponent,
    IncomingComponent,
    OutgoingComponent
  ],
  imports: [
    CommonModule,
    StaffRoutingModule,
    CustomAngularMaterialModule
  ]
})
export class StaffModule { }
