import { TestBed } from '@angular/core/testing';

import { sampleWithRequiredData, sampleWithNewData } from '../event-plan.test-samples';

import { EventPlanFormService } from './event-plan-form.service';

describe('EventPlan Form Service', () => {
  let service: EventPlanFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventPlanFormService);
  });

  describe('Service methods', () => {
    describe('createEventPlanFormGroup', () => {
      it('should create a new form with FormControl', () => {
        const formGroup = service.createEventPlanFormGroup();

        expect(formGroup.controls).toEqual(
          expect.objectContaining({
            id: expect.any(Object),
            eventDate: expect.any(Object),
            eventStartTime: expect.any(Object),
            eventEndTime: expect.any(Object),
            komootMap: expect.any(Object),
            eventNAme: expect.any(Object),
            description: expect.any(Object),
            travelSchedule: expect.any(Object),
            hikeMainImage: expect.any(Object),
            hikeHighlightImage1: expect.any(Object),
            hikeHighlightImage1Description: expect.any(Object),
            hikeHighlightImage2: expect.any(Object),
            hikeHighlightImage2Description: expect.any(Object),
          })
        );
      });

      it('passing IEventPlan should create a new form with FormGroup', () => {
        const formGroup = service.createEventPlanFormGroup(sampleWithRequiredData);

        expect(formGroup.controls).toEqual(
          expect.objectContaining({
            id: expect.any(Object),
            eventDate: expect.any(Object),
            eventStartTime: expect.any(Object),
            eventEndTime: expect.any(Object),
            komootMap: expect.any(Object),
            eventNAme: expect.any(Object),
            description: expect.any(Object),
            travelSchedule: expect.any(Object),
            hikeMainImage: expect.any(Object),
            hikeHighlightImage1: expect.any(Object),
            hikeHighlightImage1Description: expect.any(Object),
            hikeHighlightImage2: expect.any(Object),
            hikeHighlightImage2Description: expect.any(Object),
          })
        );
      });
    });

    describe('getEventPlan', () => {
      it('should return NewEventPlan for default EventPlan initial value', () => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const formGroup = service.createEventPlanFormGroup(sampleWithNewData);

        const eventPlan = service.getEventPlan(formGroup) as any;

        expect(eventPlan).toMatchObject(sampleWithNewData);
      });

      it('should return NewEventPlan for empty EventPlan initial value', () => {
        const formGroup = service.createEventPlanFormGroup();

        const eventPlan = service.getEventPlan(formGroup) as any;

        expect(eventPlan).toMatchObject({});
      });

      it('should return IEventPlan', () => {
        const formGroup = service.createEventPlanFormGroup(sampleWithRequiredData);

        const eventPlan = service.getEventPlan(formGroup) as any;

        expect(eventPlan).toMatchObject(sampleWithRequiredData);
      });
    });

    describe('resetForm', () => {
      it('passing IEventPlan should not enable id FormControl', () => {
        const formGroup = service.createEventPlanFormGroup();
        expect(formGroup.controls.id.disabled).toBe(true);

        service.resetForm(formGroup, sampleWithRequiredData);

        expect(formGroup.controls.id.disabled).toBe(true);
      });

      it('passing NewEventPlan should disable id FormControl', () => {
        const formGroup = service.createEventPlanFormGroup(sampleWithRequiredData);
        expect(formGroup.controls.id.disabled).toBe(true);

        service.resetForm(formGroup, { id: null });

        expect(formGroup.controls.id.disabled).toBe(true);
      });
    });
  });
});
