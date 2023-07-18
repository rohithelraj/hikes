import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';
import { TravelReportComponent } from './list/travel-report.component';
import { TravelReportDetailComponent } from './detail/travel-report-detail.component';
import { TravelReportUpdateComponent } from './update/travel-report-update.component';
import { TravelReportDeleteDialogComponent } from './delete/travel-report-delete-dialog.component';
import { TravelReportRoutingModule } from './route/travel-report-routing.module';

@NgModule({
  imports: [SharedModule, TravelReportRoutingModule],
  declarations: [TravelReportComponent, TravelReportDetailComponent, TravelReportUpdateComponent, TravelReportDeleteDialogComponent],
})
export class TravelReportModule {}
