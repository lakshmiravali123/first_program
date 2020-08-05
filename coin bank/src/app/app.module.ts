import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PayablesComponent } from './payables/payables.component';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoadmanagementComponent } from './loadmanagement/loadmanagement.component';
import { CommercialComponent } from './commercial/commercial.component';
import { FacilityComponent } from './facility/facility.component';
import { Facility2Component } from './facility2/facility2.component';
import { NextComponent } from './next/next.component';
import { ApprovalComponent } from './approval/approval.component';
import { AcceptComponent } from './accept/accept.component';
import { TransectionComponent } from './transection/transection.component';

@NgModule({
  declarations: [
    AppComponent,
    PayablesComponent,
    DashboardComponent,
    LoadmanagementComponent,
    CommercialComponent,
    FacilityComponent,
    Facility2Component,
    NextComponent,
    ApprovalComponent,
    AcceptComponent,
    TransectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
