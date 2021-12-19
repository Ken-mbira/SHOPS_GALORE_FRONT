import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import {MatSelectModule} from '@angular/material/select';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule,} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTooltipModule} from '@angular/material/tooltip';



import { NgChartsModule } from 'ng2-charts'

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
import { SummaryComponent } from './destination/summary/summary.component';
import { NewComponent } from './destination/new/new.component';
import { MeansComponent } from './means/means.component';
import { FillIdComponent } from './deliveries/dropoff/fill-id/fill-id.component';
import { AccountComponent } from './account/account.component';
import { AccountSideNavComponent } from './account/account-side-nav/account-side-nav.component';



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
    SummaryComponent,
    NewComponent,
    MeansComponent,
    FillIdComponent,
    AccountComponent,
    AccountSideNavComponent
  ],
  imports: [
    CommonModule,
    DeliveryRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatDividerModule,
    MatSelectModule,
    NgChartsModule,
    MatGridListModule,
    MatExpansionModule,
    MatTabsModule,
    MatFormFieldModule,
    MatDialogModule,
    FormsModule,
    MatInputModule,
    MatCheckboxModule,
    MatTooltipModule
  ],
  entryComponents: [FillIdComponent]
})
export class DeliveryModule { }
