import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserRouteAccessService } from 'app/core/auth/user-route-access.service';
import { TravelReportComponent } from '../list/travel-report.component';
import { TravelReportDetailComponent } from '../detail/travel-report-detail.component';
import { TravelReportUpdateComponent } from '../update/travel-report-update.component';
import { TravelReportRoutingResolveService } from './travel-report-routing-resolve.service';
import { ASC } from 'app/config/navigation.constants';

const travelReportRoute: Routes = [
  {
    path: '',
    component: TravelReportComponent,
    data: {
      defaultSort: 'id,' + ASC,
    },
    //canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: TravelReportDetailComponent,
    resolve: {
      travelReport: TravelReportRoutingResolveService,
    },
    //canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    component: TravelReportUpdateComponent,
    resolve: {
      travelReport: TravelReportRoutingResolveService,
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    component: TravelReportUpdateComponent,
    resolve: {
      travelReport: TravelReportRoutingResolveService,
    },
    canActivate: [UserRouteAccessService],
  },
];

@NgModule({
  imports: [RouterModule.forChild(travelReportRoute)],
  exports: [RouterModule],
})
export class TravelReportRoutingModule {}
