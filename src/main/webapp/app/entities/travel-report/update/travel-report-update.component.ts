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
  htmlContent = '';

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
    const travelReport = this.travelReportFormService.getTravelReport(this.editForm);
    if (travelReport.id !== null) {
      this.subscribeToSaveResponse(this.travelReportService.update(travelReport));
    } else {
      this.subscribeToSaveResponse(this.travelReportService.create(travelReport));
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

  navigateTo(elementId: string, breadcrumbId: string) {
    this.hideAllForms();
    let element = document.getElementById(elementId);
    // @ts-ignore
    element.className = 'list-group-item d-flex justify-content-between align-items-start';
    let breadcrumb = document.getElementById(breadcrumbId);
    // @ts-ignore
    breadcrumb.className = 'breadcrumb-item active';
    // @ts-ignore
    breadcrumb.ariaCurrent = 'page';
  }

  private hideAllForms() {
    let descriptionElement = document.getElementById('description-details');
    // @ts-ignore
    descriptionElement.className = 'list-group-item d-flex justify-content-between align-items-start hidden';
    let highlight1Element = document.getElementById('highlight-1-details');
    // @ts-ignore
    highlight1Element.className = 'list-group-item d-flex justify-content-between align-items-start hidden';
    let highlight2Element = document.getElementById('highlight-2-details');
    // @ts-ignore
    highlight2Element.className = 'list-group-item d-flex justify-content-between align-items-start hidden';
    let highlight3Element = document.getElementById('highlight-3-details');
    // @ts-ignore
    highlight3Element.className = 'list-group-item d-flex justify-content-between align-items-start hidden';
    let highlight4Element = document.getElementById('highlight-4-details');
    // @ts-ignore
    highlight4Element.className = 'list-group-item d-flex justify-content-between align-items-start hidden';
    let highlight5Element = document.getElementById('highlight-5-details');
    // @ts-ignore
    highlight5Element.className = 'list-group-item d-flex justify-content-between align-items-start hidden';
    let highlight6Element = document.getElementById('highlight-6-details');
    // @ts-ignore
    highlight6Element.className = 'list-group-item d-flex justify-content-between align-items-start hidden';
    let tripDetailsElement = document.getElementById('related-trip-details');
    // @ts-ignore
    tripDetailsElement.className = 'list-group-item d-flex justify-content-between align-items-start hidden';
    let basicElement = document.getElementById('basic-details');
    // @ts-ignore
    basicElement.className = 'list-group-item d-flex justify-content-between align-items-start hidden';

    let descriptionBreadcrumb = document.getElementById('description');
    // @ts-ignore
    descriptionBreadcrumb.className = 'breadcrumb-item';
    // @ts-ignore
    descriptionBreadcrumb.ariaCurrent = '';
    let highlight1Breadcrumb = document.getElementById('highlight-1');
    // @ts-ignore
    highlight1Breadcrumb.className = 'breadcrumb-item';
    // @ts-ignore
    highlight1Breadcrumb.ariaCurrent = '';
    let highlight2Breadcrumb = document.getElementById('highlight-2');
    // @ts-ignore
    highlight2Breadcrumb.className = 'breadcrumb-item';
    // @ts-ignore
    highlight2Breadcrumb.ariaCurrent = '';
    let highlight3Breadcrumb = document.getElementById('highlight-3');
    // @ts-ignore
    highlight3Breadcrumb.className = 'breadcrumb-item';
    // @ts-ignore
    highlight3Breadcrumb.ariaCurrent = '';
    let highlight4Breadcrumb = document.getElementById('highlight-4');
    // @ts-ignore
    highlight4Breadcrumb.className = 'breadcrumb-item';
    // @ts-ignore
    highlight4Breadcrumb.ariaCurrent = '';
    let highlight5Breadcrumb = document.getElementById('highlight-5');
    // @ts-ignore
    highlight5Breadcrumb.className = 'breadcrumb-item';
    // @ts-ignore
    highlight5Breadcrumb.ariaCurrent = '';
    let highlight6Breadcrumb = document.getElementById('highlight-6');
    // @ts-ignore
    highlight6Breadcrumb.className = 'breadcrumb-item';
    // @ts-ignore
    highlight6Breadcrumb.ariaCurrent = '';
    let tripDetailsBreadcrumb = document.getElementById('related-trips');
    // @ts-ignore
    tripDetailsBreadcrumb.className = 'breadcrumb-item';
    // @ts-ignore
    tripDetailsBreadcrumb.ariaCurrent = '';
    let basicBreadcrumb = document.getElementById('basic');
    // @ts-ignore
    basicBreadcrumb.className = 'breadcrumb-item';
    // @ts-ignore
    basicBreadcrumb.ariaCurrent = '';
  }
}
