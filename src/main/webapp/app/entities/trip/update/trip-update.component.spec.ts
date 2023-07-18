import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of, Subject, from } from 'rxjs';

import { TripFormService } from './trip-form.service';
import { TripService } from '../service/trip.service';
import { ITrip } from '../trip.model';

import { TripUpdateComponent } from './trip-update.component';

describe('Trip Management Update Component', () => {
  let comp: TripUpdateComponent;
  let fixture: ComponentFixture<TripUpdateComponent>;
  let activatedRoute: ActivatedRoute;
  let tripFormService: TripFormService;
  let tripService: TripService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([])],
      declarations: [TripUpdateComponent],
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
      .overrideTemplate(TripUpdateComponent, '')
      .compileComponents();

    fixture = TestBed.createComponent(TripUpdateComponent);
    activatedRoute = TestBed.inject(ActivatedRoute);
    tripFormService = TestBed.inject(TripFormService);
    tripService = TestBed.inject(TripService);

    comp = fixture.componentInstance;
  });

  describe('ngOnInit', () => {
    it('Should update editForm', () => {
      const trip: ITrip = { id: 456 };

      activatedRoute.data = of({ trip });
      comp.ngOnInit();

      expect(comp.trip).toEqual(trip);
    });
  });

  describe('save', () => {
    it('Should call update service on save for existing entity', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<ITrip>>();
      const trip = { id: 123 };
      jest.spyOn(tripFormService, 'getTrip').mockReturnValue(trip);
      jest.spyOn(tripService, 'update').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ trip });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.next(new HttpResponse({ body: trip }));
      saveSubject.complete();

      // THEN
      expect(tripFormService.getTrip).toHaveBeenCalled();
      expect(comp.previousState).toHaveBeenCalled();
      expect(tripService.update).toHaveBeenCalledWith(expect.objectContaining(trip));
      expect(comp.isSaving).toEqual(false);
    });

    it('Should call create service on save for new entity', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<ITrip>>();
      const trip = { id: 123 };
      jest.spyOn(tripFormService, 'getTrip').mockReturnValue({ id: null });
      jest.spyOn(tripService, 'create').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ trip: null });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.next(new HttpResponse({ body: trip }));
      saveSubject.complete();

      // THEN
      expect(tripFormService.getTrip).toHaveBeenCalled();
      expect(tripService.create).toHaveBeenCalled();
      expect(comp.isSaving).toEqual(false);
      expect(comp.previousState).toHaveBeenCalled();
    });

    it('Should set isSaving to false on error', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<ITrip>>();
      const trip = { id: 123 };
      jest.spyOn(tripService, 'update').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ trip });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.error('This is an error!');

      // THEN
      expect(tripService.update).toHaveBeenCalled();
      expect(comp.isSaving).toEqual(false);
      expect(comp.previousState).not.toHaveBeenCalled();
    });
  });
});
