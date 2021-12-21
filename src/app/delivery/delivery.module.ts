import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { CustomAngularMaterialModule } from '../custom-angular-material/custom-angular-material.module';

import { DeliveryRoutingModule } from './delivery-routing.module';
import { DeliveryComponent } from './delivery.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeliveriesComponent } from './deliveries/deliveries.component';
import { PickupComponent } from './deliveries/pickup/pickup.component';
import { DropoffComponent } from './deliveries/dropoff/dropoff.component';
import { TransitComponent } from './deliveries/transit/transit.component';
import { NotificationComponent } from './notification/notification.component';
import { DestinationComponent } from './destination/destination.component';
import { MeansComponent } from './means/means.component';
import { FillIdComponent } from './deliveries/dropoff/fill-id/fill-id.component';
import { AccountComponent } from './account/account.component';
import { AccountSideNavComponent } from './account/account-side-nav/account-side-nav.component';
import { NewDeliveryMeansComponent } from './means/new-delivery-means/new-delivery-means.component';
import { SummaryDeliveryMeansComponent } from './means/summary-delivery-means/summary-delivery-means.component';
import { NewDestinationComponent } from './destination/new-destination/new-destination.component';
import { SummaryDestinationComponent } from './destination/summary-destination/summary-destination.component';



@NgModule({
  declarations: [
    DeliveryComponent,
    NavbarComponent,
    SidenavComponent,
    DashboardComponent,
    DeliveriesComponent,
    PickupComponent,
    DropoffComponent,
    TransitComponent,
    NotificationComponent,
    DestinationComponent,
    MeansComponent,
    FillIdComponent,
    AccountComponent,
    AccountSideNavComponent,
    NewDeliveryMeansComponent,
    SummaryDeliveryMeansComponent,
    NewDestinationComponent,
    SummaryDestinationComponent
  ],
  imports: [
    CommonModule,
    DeliveryRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CustomAngularMaterialModule,
  ],
  entryComponents: [FillIdComponent]
})
export class DeliveryModule { }
