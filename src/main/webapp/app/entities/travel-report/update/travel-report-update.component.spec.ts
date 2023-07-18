import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of, Subject, from } from 'rxjs';

import { TravelReportFormService } from './travel-report-form.service';
import { TravelReportService } from '../service/travel-report.service';
import { ITravelReport } from '../travel-report.model';
import { ITrip } from 'app/entities/trip/trip.model';
import { TripService } from 'app/entities/trip/service/trip.service';

import { TravelReportUpdateComponent } from './travel-report-update.component';

describe('TravelReport Management Update Component', () => {
  let comp: TravelReportUpdateComponent;
  let fixture: ComponentFixture<TravelReportUpdateComponent>;
  let activatedRoute: ActivatedRoute;
  let travelReportFormService: TravelReportFormService;
  let travelReportService: TravelReportService;
  let tripService: TripService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([])],
      declarations: [TravelReportUpdateComponent],
      providers: [
        FormBuilder,
        {
          provide: ActivatedRoute,
          useValue: {
            params: from([{}]),
          },
        },
      ],
    })
      .overrideTemplate(TravelReportUpdateComponent, '')
      .compileComponents();

    fixture = TestBed.createComponent(TravelReportUpdateComponent);
    activatedRoute = TestBed.inject(ActivatedRoute);
    travelReportFormService = TestBed.inject(TravelReportFormService);
    travelReportService = TestBed.inject(TravelReportService);
    tripService = TestBed.inject(TripService);

    comp = fixture.componentInstance;
  });

  describe('ngOnInit', () => {
    it('Should call Trip query and add missing value', () => {
      const travelReport: ITravelReport = { id: 456 };
      const trip: ITrip = { id: 26530 };
      travelReport.trip = trip;

      const tripCollection: ITrip[] = [{ id: 58183 }];
      jest.spyOn(tripService, 'query').mockReturnValue(of(new HttpResponse({ body: tripCollection })));
      const additionalTrips = [trip];
      const expectedCollection: ITrip[] = [...additionalTrips, ...tripCollection];
      jest.spyOn(tripService, 'addTripToCollectionIfMissing').mockReturnValue(expectedCollection);

      activatedRoute.data = of({ travelReport });
      comp.ngOnInit();

      expect(tripService.query).toHaveBeenCalled();
      expect(tripService.addTripToCollectionIfMissing).toHaveBeenCalledWith(
        tripCollection,
        ...additionalTrips.map(expect.objectContaining)
      );
      expect(comp.tripsSharedCollection).toEqual(expectedCollection);
    });

    it('Should update editForm', () => {
      const travelReport: ITravelReport = { id: 456 };
      const trip: ITrip = { id: 28520 };
      travelReport.trip = trip;

      activatedRoute.data = of({ travelReport });
      comp.ngOnInit();

      expect(comp.tripsSharedCollection).toContain(trip);
      expect(comp.travelReport).toEqual(travelReport);
    });
  });

  describe('save', () => {
    it('Should call update service on save for existing entity', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<ITravelReport>>();
      const travelReport = { id: 123 };
      jest.spyOn(travelReportFormService, 'getTravelReport').mockReturnValue(travelReport);
      jest.spyOn(travelReportService, 'update').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ travelReport });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.next(new HttpResponse({ body: travelReport }));
      saveSubject.complete();

      // THEN
      expect(travelReportFormService.getTravelReport).toHaveBeenCalled();
      expect(comp.previousState).toHaveBeenCalled();
      expect(travelReportService.update).toHaveBeenCalledWith(expect.objectContaining(travelReport));
      expect(comp.isSaving).toEqual(false);
    });

    it('Should call create service on save for new entity', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<ITravelReport>>();
      const travelReport = { id: 123 };
      jest.spyOn(travelReportFormService, 'getTravelReport').mockReturnValue({ id: null });
      jest.spyOn(travelReportService, 'create').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ travelReport: null });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.next(new HttpResponse({ body: travelReport }));
      saveSubject.complete();

      // THEN
      expect(travelReportFormService.getTravelReport).toHaveBeenCalled();
      expect(travelReportService.create).toHaveBeenCalled();
      expect(comp.isSaving).toEqual(false);
      expect(comp.previousState).toHaveBeenCalled();
    });

    it('Should set isSaving to false on error', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<ITravelReport>>();
      const travelReport = { id: 123 };
      jest.spyOn(travelReportService, 'update').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ travelReport });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.error('This is an error!');

      // THEN
      expect(travelReportService.update).toHaveBeenCalled();
      expect(comp.isSaving).toEqual(false);
      expect(comp.previousState).not.toHaveBeenCalled();
    });
  });

  describe('Compare relationships', () => {
    describe('compareTrip', () => {
      it('Should forward to tripService', () => {
        const entity = { id: 123 };
        const entity2 = { id: 456 };
        jest.spyOn(tripService, 'compareTrip');
        comp.compareTrip(entity, entity2);
        expect(tripService.compareTrip).toHaveBeenCalledWith(entity, entity2);
      });
    });
  });
});
