import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';
import { EventPlanComponent } from './list/event-plan.component';
import { EventPlanDetailComponent } from './detail/event-plan-detail.component';
import { EventPlanUpdateComponent } from './update/event-plan-update.component';
import { EventPlanDeleteDialogComponent } from './delete/event-plan-delete-dialog.component';
import { EventPlanRoutingModule } from './route/event-plan-routing.module';

@NgModule({
  imports: [SharedModule, EventPlanRoutingModule],
  declarations: [EventPlanComponent, EventPlanDetailComponent, EventPlanUpdateComponent, EventPlanDeleteDialogComponent],
})
export class EventPlanModule {}
