import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PayablesComponent } from './payables/payables.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoadmanagementComponent } from './loadmanagement/loadmanagement.component';
import { CommercialComponent } from './commercial/commercial.component';
import { FacilityComponent } from './facility/facility.component';
import { Facility2Component } from './facility2/facility2.component';
import { NextComponent } from './next/next.component';
import { ApprovalComponent } from './approval/approval.component';
import { AcceptComponent } from './accept/accept.component';
import { TransectionComponent } from './transection/transection.component';


const routes: Routes = [
 {
    
    path:'pay',
    component: PayablesComponent
  
},
{
    
  path:'pay/load',
  component:LoadmanagementComponent

},
{
path:'pay/load/com',
component:CommercialComponent
},
{
  path:'pay/load/com/facility',
  component: FacilityComponent
  },
  
    {
      path:'pay/load/com/fac',
      component: Facility2Component
      },
      {
        path:'pay/load/com/fac/next',
        component:NextComponent
        },
        {
          path:'pay/load/com/fac/next/approval',
          component:ApprovalComponent
          },
          {
            path:'pay/load/com/fac/next/approval/accept',
            component:AcceptComponent
            },
            {
              path:'pay/load/com/fac/next/approval/accept/trans',
              component:TransectionComponent
              },
    
  

    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
