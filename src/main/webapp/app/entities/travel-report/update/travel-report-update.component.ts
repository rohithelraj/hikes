import { Component, OnInit, ElementRef } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { finalize, map } from 'rxjs/operators';

import { TravelReportFormService, TravelReportFormGroup } from './travel-report-form.service';
import { ITravelReport } from '../travel-report.model';
import { TravelReportService } from '../service/travel-report.service';
import { AlertError } from 'app/shared/alert/alert-error.model';
import { EventManager, EventWithContent } from 'app/core/util/event-manager.service';
import { DataUtils, FileLoadError } from 'app/core/util/data-util.service';
import { ITrip } from 'app/entities/trip/trip.model';
import { TripService } from 'app/entities/trip/service/trip.service';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'jhi-travel-report-update',
  templateUrl: './travel-report-update.component.html',
  styleUrls: ['./travel-report-update.component.scss'],
})
export class TravelReportUpdateComponent implements OnInit {
  isSaving = false;
  travelReport: ITravelReport | null = null;

  tripsSharedCollection: ITrip[] = [];

  editForm: TravelReportFormGroup = this.travelReportFormService.createTravelReportFormGroup();

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
    protected travelReportService: TravelReportService,
    protected travelReportFormService: TravelReportFormService,
    protected tripService: TripService,
    protected elementRef: ElementRef,
    protected activatedRoute: ActivatedRoute
  ) {}

  compareTrip = (o1: ITrip | null, o2: ITrip | null): boolean => this.tripService.compareTrip(o1, o2);

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ travelReport }) => {
      this.travelReport = travelReport;
      if (travelReport) {
        this.updateForm(travelReport);
      }

      this.loadRelationshipsOptions();
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
    const travelReport = this.travelReportFormService.getTravelReport(this.editForm);
    if (travelReport.id !== null) {
      this.subscribeToSaveResponse(this.travelReportService.update(travelReport));
    } else {
      this.subscribeToSaveResponse(this.travelReportService.create(travelReport));
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

  protected subscribeToSaveResponse(result: Observable<HttpResponse<ITravelReport>>): void {
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

  protected updateForm(travelReport: ITravelReport): void {
    this.travelReport = travelReport;
    this.travelReportFormService.resetForm(this.editForm, travelReport);

    this.tripsSharedCollection = this.tripService.addTripToCollectionIfMissing<ITrip>(this.tripsSharedCollection, travelReport.trip);
  }

  protected loadRelationshipsOptions(): void {
    this.tripService
      .query()
      .pipe(map((res: HttpResponse<ITrip[]>) => res.body ?? []))
      .pipe(map((trips: ITrip[]) => this.tripService.addTripToCollectionIfMissing<ITrip>(trips, this.travelReport?.trip)))
      .subscribe((trips: ITrip[]) => (this.tripsSharedCollection = trips));
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

    const highlight3Element = document.getElementById('highlight-3-details');
    if (highlight3Element) {
      highlight3Element.className = 'list-group-item d-flex justify-content-between align-items-start hidden';
    }

    const highlight4Element = document.getElementById('highlight-4-details');
    if (highlight4Element) {
      highlight4Element.className = 'list-group-item d-flex justify-content-between align-items-start hidden';
    }

    const highlight5Element = document.getElementById('highlight-5-details');
    if (highlight5Element) {
      highlight5Element.className = 'list-group-item d-flex justify-content-between align-items-start hidden';
    }

    const highlight6Element = document.getElementById('highlight-6-details');
    if (highlight6Element) {
      highlight6Element.className = 'list-group-item d-flex justify-content-between align-items-start hidden';
    }

    const tripDetailsElement = document.getElementById('related-trip-details');
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

    const highlight3Breadcrumb = document.getElementById('highlight-3');
    if (highlight3Breadcrumb) {
      highlight3Breadcrumb.className = 'breadcrumb-item';

      highlight3Breadcrumb.ariaCurrent = '';
    }

    const highlight4Breadcrumb = document.getElementById('highlight-4');
    if (highlight4Breadcrumb) {
      highlight4Breadcrumb.className = 'breadcrumb-item';

      highlight4Breadcrumb.ariaCurrent = '';
    }

    const highlight5Breadcrumb = document.getElementById('highlight-5');
    if (highlight5Breadcrumb) {
      highlight5Breadcrumb.className = 'breadcrumb-item';

      highlight5Breadcrumb.ariaCurrent = '';
    }

    const highlight6Breadcrumb = document.getElementById('highlight-6');
    if (highlight6Breadcrumb) {
      highlight6Breadcrumb.className = 'breadcrumb-item';

      highlight6Breadcrumb.ariaCurrent = '';
    }

    const tripDetailsBreadcrumb = document.getElementById('related-trips');
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
