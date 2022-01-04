import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StaffComponent } from './staff.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { IncomingComponent } from './incoming/incoming.component';
import { OutgoingComponent } from './outgoing/outgoing.component';
import { DailyOrdersComponent } from './daily-orders/daily-orders.component';

const routes: Routes = [
  { path:"",redirectTo:"dashboard"},
  { path: '', component: StaffComponent,
    children: [
      { path:"dashboard", component: DashboardComponent},
      { path:"outgoing", component: OutgoingComponent},
      { path:"incoming", component: IncomingComponent},
      { path:"daily-orders", component: DailyOrdersComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffRoutingModule { }
