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

@Component({
  selector: 'jhi-travel-report-update',
  templateUrl: './travel-report-update.component.html',
})
export class TravelReportUpdateComponent implements OnInit {
  isSaving = false;
  travelReport: ITravelReport | null = null;

  tripsSharedCollection: ITrip[] = [];

  editForm: TravelReportFormGroup = this.travelReportFormService.createTravelReportFormGroup();

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
}
