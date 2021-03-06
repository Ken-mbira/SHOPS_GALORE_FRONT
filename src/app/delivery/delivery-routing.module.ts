import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeliveryComponent } from './delivery.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { DeliveriesComponent } from './deliveries/deliveries.component';
import { NotificationComponent } from './notification/notification.component';
import { MeansComponent } from './means/means.component';
import { DestinationComponent } from './destination/destination.component';
import { AccountComponent } from './account/account.component';
import { NewDestinationComponent } from './destination/new-destination/new-destination.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard'},
  {
    path: '',
    component: DeliveryComponent,
    children: [
      { path:'dashboard', component: DashboardComponent },
      {path: 'deliveries', component:DeliveriesComponent},
      {path: 'notification', component: NotificationComponent},
      {path: 'means', component: MeansComponent},
      {path: 'destination', component:DestinationComponent},
      {path: 'account', component:AccountComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeliveryRoutingModule { }
