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
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'jhi-event-plan-update',
  templateUrl: './event-plan-update.component.html',
  styleUrls: ['./event-plan-update.component.scss'],
})
export class EventPlanUpdateComponent implements OnInit {
  isSaving = false;
  eventPlan: IEventPlan | null = null;

  editForm: EventPlanFormGroup = this.eventPlanFormService.createEventPlanFormGroup();
  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: '0',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Enter text here...',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    fonts: [
      { class: 'arial', name: 'Arial' },
      { class: 'times-new-roman', name: 'Times New Roman' },
      { class: 'calibri', name: 'Calibri' },
      { class: 'comic-sans-ms', name: 'Comic Sans MS' },
    ],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText',
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    toolbarPosition: 'top',
    toolbarHiddenButtons: [
      [
        'strikeThrough',
        'subscript',
        'superscript',
        'justifyLeft',
        'justifyCenter',
        'justifyRight',
        'justifyFull',
        'indent',
        'outdent',
        'insertUnorderedList',
        'insertOrderedList',
      ],
      ['insertImage', 'insertVideo'],
    ],
  };

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
        this.eventManager.broadcast(
          new EventWithContent<AlertError>('hikesApp.error', {
            ...err,
            key: 'error.file.' + err.key,
          })
        ),
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

  navigateTo(elementId: string, breadcrumbId: string): void {
    this.hideAllForms();
    const element = document.getElementById(elementId);
    if (element) {
      element.className = 'list-group-item d-flex justify-content-between align-items-start';
    }

    const breadcrumb = document.getElementById(breadcrumbId);
    if (breadcrumb) {
      breadcrumb.className = 'breadcrumb-item active';

      breadcrumb.ariaCurrent = 'page';
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

  private hideAllForms(): void {
    const descriptionElement = document.getElementById('description-details');
    if (descriptionElement) {
      descriptionElement.className = 'list-group-item d-flex justify-content-between align-items-start hidden';
    }

    const highlight1Element = document.getElementById('highlight-1-details');
    if (highlight1Element) {
      highlight1Element.className = 'list-group-item d-flex justify-content-between align-items-start hidden';
    }

    const highlight2Element = document.getElementById('highlight-2-details');
    if (highlight2Element) {
      highlight2Element.className = 'list-group-item d-flex justify-content-between align-items-start hidden';
    }

    const tripDetailsElement = document.getElementById('travel-schedule-details');
    if (tripDetailsElement) {
      tripDetailsElement.className = 'list-group-item d-flex justify-content-between align-items-start hidden';
    }

    const basicElement = document.getElementById('basic-details');
    if (basicElement) {
      basicElement.className = 'list-group-item d-flex justify-content-between align-items-start hidden';
    }

    const descriptionBreadcrumb = document.getElementById('description');
    if (descriptionBreadcrumb) {
      descriptionBreadcrumb.className = 'breadcrumb-item';

      descriptionBreadcrumb.ariaCurrent = '';
    }

    const highlight1Breadcrumb = document.getElementById('highlight-1');
    if (highlight1Breadcrumb) {
      highlight1Breadcrumb.className = 'breadcrumb-item';

      highlight1Breadcrumb.ariaCurrent = '';
    }

    const highlight2Breadcrumb = document.getElementById('highlight-2');
    if (highlight2Breadcrumb) {
      highlight2Breadcrumb.className = 'breadcrumb-item';

      highlight2Breadcrumb.ariaCurrent = '';
    }

    const tripDetailsBreadcrumb = document.getElementById('travel-schedule');
    if (tripDetailsBreadcrumb) {
      tripDetailsBreadcrumb.className = 'breadcrumb-item';

      tripDetailsBreadcrumb.ariaCurrent = '';
    }

    const basicBreadcrumb = document.getElementById('basic');
    if (basicBreadcrumb) {
      basicBreadcrumb.className = 'breadcrumb-item';

      basicBreadcrumb.ariaCurrent = '';
    }
  }
}
