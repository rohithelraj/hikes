import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { IEventPlan } from '../event-plan.model';
import { EventPlanService } from '../service/event-plan.service';
import { ITEM_DELETED_EVENT } from 'app/config/navigation.constants';

@Component({
  templateUrl: './event-plan-delete-dialog.component.html',
})
export class EventPlanDeleteDialogComponent {
  eventPlan?: IEventPlan;

  constructor(protected eventPlanService: EventPlanService, protected activeModal: NgbActiveModal) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.eventPlanService.delete(id).subscribe(() => {
      this.activeModal.close(ITEM_DELETED_EVENT);
    });
  }
}
