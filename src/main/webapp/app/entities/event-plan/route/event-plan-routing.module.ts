import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserRouteAccessService } from 'app/core/auth/user-route-access.service';
import { EventPlanComponent } from '../list/event-plan.component';
import { EventPlanDetailComponent } from '../detail/event-plan-detail.component';
import { EventPlanUpdateComponent } from '../update/event-plan-update.component';
import { EventPlanRoutingResolveService } from './event-plan-routing-resolve.service';
import { ASC } from 'app/config/navigation.constants';

const eventPlanRoute: Routes = [
  {
    path: '',
    component: EventPlanComponent,
    data: {
      defaultSort: 'id,' + ASC,
    },
    // canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: EventPlanDetailComponent,
    resolve: {
      eventPlan: EventPlanRoutingResolveService,
    },
    // canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    component: EventPlanUpdateComponent,
    resolve: {
      eventPlan: EventPlanRoutingResolveService,
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    component: EventPlanUpdateComponent,
    resolve: {
      eventPlan: EventPlanRoutingResolveService,
    },
    canActivate: [UserRouteAccessService],
  },
];

@NgModule({
  imports: [RouterModule.forChild(eventPlanRoute)],
  exports: [RouterModule],
})
export class EventPlanRoutingModule {}
