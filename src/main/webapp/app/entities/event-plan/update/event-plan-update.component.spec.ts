import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of, Subject, from } from 'rxjs';

import { EventPlanFormService } from './event-plan-form.service';
import { EventPlanService } from '../service/event-plan.service';
import { IEventPlan } from '../event-plan.model';

import { EventPlanUpdateComponent } from './event-plan-update.component';

describe('EventPlan Management Update Component', () => {
  let comp: EventPlanUpdateComponent;
  let fixture: ComponentFixture<EventPlanUpdateComponent>;
  let activatedRoute: ActivatedRoute;
  let eventPlanFormService: EventPlanFormService;
  let eventPlanService: EventPlanService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([])],
      declarations: [EventPlanUpdateComponent],
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
      .overrideTemplate(EventPlanUpdateComponent, '')
      .compileComponents();

    fixture = TestBed.createComponent(EventPlanUpdateComponent);
    activatedRoute = TestBed.inject(ActivatedRoute);
    eventPlanFormService = TestBed.inject(EventPlanFormService);
    eventPlanService = TestBed.inject(EventPlanService);

    comp = fixture.componentInstance;
  });

  describe('ngOnInit', () => {
    it('Should update editForm', () => {
      const eventPlan: IEventPlan = { id: 456 };

      activatedRoute.data = of({ eventPlan });
      comp.ngOnInit();

      expect(comp.eventPlan).toEqual(eventPlan);
    });
  });

  describe('save', () => {
    it('Should call update service on save for existing entity', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<IEventPlan>>();
      const eventPlan = { id: 123 };
      jest.spyOn(eventPlanFormService, 'getEventPlan').mockReturnValue(eventPlan);
      jest.spyOn(eventPlanService, 'update').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ eventPlan });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.next(new HttpResponse({ body: eventPlan }));
      saveSubject.complete();

      // THEN
      expect(eventPlanFormService.getEventPlan).toHaveBeenCalled();
      expect(comp.previousState).toHaveBeenCalled();
      expect(eventPlanService.update).toHaveBeenCalledWith(expect.objectContaining(eventPlan));
      expect(comp.isSaving).toEqual(false);
    });

    it('Should call create service on save for new entity', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<IEventPlan>>();
      const eventPlan = { id: 123 };
      jest.spyOn(eventPlanFormService, 'getEventPlan').mockReturnValue({ id: null });
      jest.spyOn(eventPlanService, 'create').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ eventPlan: null });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.next(new HttpResponse({ body: eventPlan }));
      saveSubject.complete();

      // THEN
      expect(eventPlanFormService.getEventPlan).toHaveBeenCalled();
      expect(eventPlanService.create).toHaveBeenCalled();
      expect(comp.isSaving).toEqual(false);
      expect(comp.previousState).toHaveBeenCalled();
    });

    it('Should set isSaving to false on error', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<IEventPlan>>();
      const eventPlan = { id: 123 };
      jest.spyOn(eventPlanService, 'update').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ eventPlan });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.error('This is an error!');

      // THEN
      expect(eventPlanService.update).toHaveBeenCalled();
      expect(comp.isSaving).toEqual(false);
      expect(comp.previousState).not.toHaveBeenCalled();
    });
  });
});
