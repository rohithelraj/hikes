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
    const trip = this.tripFormService.getTrip(this.editForm);
    if (trip.id !== null) {
      this.subscribeToSaveResponse(this.tripService.update(trip));
    } else {
      this.subscribeToSaveResponse(this.tripService.create(trip));
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
    this.isSaving = false; // Api for inheritance.
  }

  protected onSaveFinalize(): void {
    this.isSaving = false;
  }

  protected updateForm(trip: ITrip): void {
    this.trip = trip;
    this.tripFormService.resetForm(this.editForm, trip);
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

    const accomodationDetailsElement = document.getElementById('accomodation-details');
    if (accomodationDetailsElement) {
      accomodationDetailsElement.className = 'list-group-item d-flex justify-content-between align-items-start hidden';
    }

    const costsDetailsElement = document.getElementById('costs-details');
    if (costsDetailsElement) {
      costsDetailsElement.className = 'list-group-item d-flex justify-content-between align-items-start hidden';
    }

    const transportationDetailsElement = document.getElementById('transportation-details');
    if (transportationDetailsElement) {
      transportationDetailsElement.className = 'list-group-item d-flex justify-content-between align-items-start hidden';
    }

    const relatedHikesDetailsElement = document.getElementById('related-hikes-details');
    if (relatedHikesDetailsElement) {
      relatedHikesDetailsElement.className = 'list-group-item d-flex justify-content-between align-items-start hidden';
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
    const transportationBreadcrumb = document.getElementById('transportation');
    if (transportationBreadcrumb) {
      transportationBreadcrumb.className = 'breadcrumb-item';
      transportationBreadcrumb.ariaCurrent = '';
    }
    const costsBreadcrumb = document.getElementById('costs');
    if (costsBreadcrumb) {
      costsBreadcrumb.className = 'breadcrumb-item';
      costsBreadcrumb.ariaCurrent = '';
    }
    const accomodationBreadcrumb = document.getElementById('accomodation');
    if (accomodationBreadcrumb) {
      accomodationBreadcrumb.className = 'breadcrumb-item';
      accomodationBreadcrumb.ariaCurrent = '';
    }
    const hikesDetailsBreadcrumb = document.getElementById('related-hikes');
    if (hikesDetailsBreadcrumb) {
      hikesDetailsBreadcrumb.className = 'breadcrumb-item';
      hikesDetailsBreadcrumb.ariaCurrent = '';
    }
    const basicBreadcrumb = document.getElementById('basic');
    if (basicBreadcrumb) {
      basicBreadcrumb.className = 'breadcrumb-item';
      basicBreadcrumb.ariaCurrent = '';
    }
  }
}
