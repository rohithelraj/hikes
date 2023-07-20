import { Component, OnInit, ElementRef } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { TripFormService, TripFormGroup } from './trip-form.service';
import { ITrip } from '../trip.model';
import { TripService } from '../service/trip.service';
import { AlertError } from 'app/shared/alert/alert-error.model';
import { EventManager, EventWithContent } from 'app/core/util/event-manager.service';
import { DataUtils, FileLoadError } from 'app/core/util/data-util.service';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'jhi-trip-update',
  templateUrl: './trip-update.component.html',
  styleUrls: ['./trip-update.component.scss'],
})
export class TripUpdateComponent implements OnInit {
  isSaving = false;
  trip: ITrip | null = null;

  editForm: TripFormGroup = this.tripFormService.createTripFormGroup();
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
    protected tripService: TripService,
    protected tripFormService: TripFormService,
    protected elementRef: ElementRef,
    protected activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ trip }) => {
      this.trip = trip;
      if (trip) {
        this.updateForm(trip);
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
    const trip = this.tripFormService.getTrip(this.editForm);
    if (trip.id !== null) {
      this.subscribeToSaveResponse(this.tripService.update(trip));
    } else {
      this.subscribeToSaveResponse(this.tripService.create(trip));
    }
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<ITrip>>): void {
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

  protected updateForm(trip: ITrip): void {
    this.trip = trip;
    this.tripFormService.resetForm(this.editForm, trip);
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
    let accomodationDetailsElement = document.getElementById('accomodation-details');
    // @ts-ignore
    accomodationDetailsElement.className = 'list-group-item d-flex justify-content-between align-items-start hidden';
    let costsDetailsElement = document.getElementById('costs-details');
    // @ts-ignore
    costsDetailsElement.className = 'list-group-item d-flex justify-content-between align-items-start hidden';
    let transportationDetailsElement = document.getElementById('transportation-details');
    // @ts-ignore
    transportationDetailsElement.className = 'list-group-item d-flex justify-content-between align-items-start hidden';
    let relatedHikesDetailsElement = document.getElementById('related-hikes-details');
    // @ts-ignore
    relatedHikesDetailsElement.className = 'list-group-item d-flex justify-content-between align-items-start hidden';
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
    let transportationBreadcrumb = document.getElementById('transportation');
    // @ts-ignore
    transportationBreadcrumb.className = 'breadcrumb-item';
    // @ts-ignore
    transportationBreadcrumb.ariaCurrent = '';
    let costsBreadcrumb = document.getElementById('costs');
    // @ts-ignore
    costsBreadcrumb.className = 'breadcrumb-item';
    // @ts-ignore
    costsBreadcrumb.ariaCurrent = '';
    let accomodationBreadcrumb = document.getElementById('accomodation');
    // @ts-ignore
    accomodationBreadcrumb.className = 'breadcrumb-item';
    // @ts-ignore
    accomodationBreadcrumb.ariaCurrent = '';
    let hikesDetailsBreadcrumb = document.getElementById('related-hikes');
    // @ts-ignore
    hikesDetailsBreadcrumb.className = 'breadcrumb-item';
    // @ts-ignore
    hikesDetailsBreadcrumb.ariaCurrent = '';
    let basicBreadcrumb = document.getElementById('basic');
    // @ts-ignore
    basicBreadcrumb.className = 'breadcrumb-item';
    // @ts-ignore
    basicBreadcrumb.ariaCurrent = '';
  }
}
