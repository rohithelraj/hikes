import { Component, OnInit, ElementRef } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { EventPlanFormService, EventPlanFormGroup } from './event-plan-form.service';
import { IEventPlan } from '../event-plan.model';
import { EventPlanService } from '../service/event-plan.service';
import { AlertError } from 'app/shared/alert/alert-error.model';
import { EventManager, EventWithContent } from 'app/core/util/event-manager.service';
import { DataUtils, FileLoadError } from 'app/core/util/data-util.service';

@Component({
  selector: 'jhi-event-plan-update',
  templateUrl: './event-plan-update.component.html',
})
export class EventPlanUpdateComponent implements OnInit {
  isSaving = false;
  eventPlan: IEventPlan | null = null;

  editForm: EventPlanFormGroup = this.eventPlanFormService.createEventPlanFormGroup();

  constructor(
    protected dataUtils: DataUtils,
    protected eventManager: EventManager,
    protected eventPlanService: EventPlanService,
    protected eventPlanFormService: EventPlanFormService,
    protected elementRef: ElementRef,
    protected activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ eventPlan }) => {
      this.eventPlan = eventPlan;
      if (eventPlan) {
        this.updateForm(eventPlan);
      }
    });
  }

  byteSize(base64String: string): string {
    return this.dataUtils.byteSize(base64String);
  }

  openFile(base64String: string, contentType: string | null | undefined): void {
    this.dataUtils.openFile(base64String, contentType);
  }

  setFileData(event: Event, field: string, isImage: boolean): void {
    this.dataUtils.loadFileToForm(event, this.editForm, field, isImage).subscribe({
      error: (err: FileLoadError) =>
        this.eventManager.broadcast(new EventWithContent<AlertError>('hikesApp.error', { ...err, key: 'error.file.' + err.key })),
    });
  }

  clearInputImage(field: string, fieldContentType: string, idInput: string): void {
    this.editForm.patchValue({
      [field]: null,
      [fieldContentType]: null,
    });
    if (idInput && this.elementRef.nativeElement.querySelector('#' + idInput)) {
      this.elementRef.nativeElement.querySelector('#' + idInput).value = null;
    }
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const eventPlan = this.eventPlanFormService.getEventPlan(this.editForm);
    if (eventPlan.id !== null) {
      this.subscribeToSaveResponse(this.eventPlanService.update(eventPlan));
    } else {
      this.subscribeToSaveResponse(this.eventPlanService.create(eventPlan));
    }
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IEventPlan>>): void {
    result.pipe(finalize(() => this.onSaveFinalize())).subscribe({
      next: () => this.onSaveSuccess(),
      error: () => this.onSaveError(),
    });
  }

  protected onSaveSuccess(): void {
    this.previousState();
  }

  protected onSaveError(): void {
    // Api for inheritance.
  }

  protected onSaveFinalize(): void {
    this.isSaving = false;
  }

  protected updateForm(eventPlan: IEventPlan): void {
    this.eventPlan = eventPlan;
    this.eventPlanFormService.resetForm(this.editForm, eventPlan);
  }
}
