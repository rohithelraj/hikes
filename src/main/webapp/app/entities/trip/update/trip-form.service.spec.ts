import { TestBed } from '@angular/core/testing';

import { sampleWithRequiredData, sampleWithNewData } from '../trip.test-samples';

import { TripFormService } from './trip-form.service';

describe('Trip Form Service', () => {
  let service: TripFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TripFormService);
  });

  describe('Service methods', () => {
    describe('createTripFormGroup', () => {
      it('should create a new form with FormControl', () => {
        const formGroup = service.createTripFormGroup();

        expect(formGroup.controls).toEqual(
          expect.objectContaining({
            id: expect.any(Object),
            tripName: expect.any(Object),
            mainImage: expect.any(Object),
            subImage1: expect.any(Object),
            subImage2: expect.any(Object),
            subImage3: expect.any(Object),
            subImage4: expect.any(Object),
            subImage5: expect.any(Object),
            subImage6: expect.any(Object),
            tripDescription: expect.any(Object),
            combinedMap: expect.any(Object),
            relatedEvents: expect.any(Object),
            subImage1Description: expect.any(Object),
            subImage2Description: expect.any(Object),
            subImage3Description: expect.any(Object),
            subImage4Description: expect.any(Object),
            subImage5Description: expect.any(Object),
            subImage6Description: expect.any(Object),
            activeSubImages: expect.any(Object),
            activeRelatedEvents: expect.any(Object),
            transportationDetails: expect.any(Object),
            costDetails: expect.any(Object),
            accomodationDetails: expect.any(Object),
            relatedLinks: expect.any(Object),
            startDate: expect.any(Object),
            endDate: expect.any(Object),
          })
        );
      });

      it('passing ITrip should create a new form with FormGroup', () => {
        const formGroup = service.createTripFormGroup(sampleWithRequiredData);

        expect(formGroup.controls).toEqual(
          expect.objectContaining({
            id: expect.any(Object),
            tripName: expect.any(Object),
            mainImage: expect.any(Object),
            subImage1: expect.any(Object),
            subImage2: expect.any(Object),
            subImage3: expect.any(Object),
            subImage4: expect.any(Object),
            subImage5: expect.any(Object),
            subImage6: expect.any(Object),
            tripDescription: expect.any(Object),
            combinedMap: expect.any(Object),
            relatedEvents: expect.any(Object),
            subImage1Description: expect.any(Object),
            subImage2Description: expect.any(Object),
            subImage3Description: expect.any(Object),
            subImage4Description: expect.any(Object),
            subImage5Description: expect.any(Object),
            subImage6Description: expect.any(Object),
            activeSubImages: expect.any(Object),
            activeRelatedEvents: expect.any(Object),
            transportationDetails: expect.any(Object),
            costDetails: expect.any(Object),
            accomodationDetails: expect.any(Object),
            relatedLinks: expect.any(Object),
            startDate: expect.any(Object),
            endDate: expect.any(Object),
          })
        );
      });
    });

    describe('getTrip', () => {
      it('should return NewTrip for default Trip initial value', () => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const formGroup = service.createTripFormGroup(sampleWithNewData);

        const trip = service.getTrip(formGroup) as any;

        expect(trip).toMatchObject(sampleWithNewData);
      });

      it('should return NewTrip for empty Trip initial value', () => {
        const formGroup = service.createTripFormGroup();

        const trip = service.getTrip(formGroup) as any;

        expect(trip).toMatchObject({});
      });

      it('should return ITrip', () => {
        const formGroup = service.createTripFormGroup(sampleWithRequiredData);

        const trip = service.getTrip(formGroup) as any;

        expect(trip).toMatchObject(sampleWithRequiredData);
      });
    });

    describe('resetForm', () => {
      it('passing ITrip should not enable id FormControl', () => {
        const formGroup = service.createTripFormGroup();
        expect(formGroup.controls.id.disabled).toBe(true);

        service.resetForm(formGroup, sampleWithRequiredData);

        expect(formGroup.controls.id.disabled).toBe(true);
      });

      it('passing NewTrip should disable id FormControl', () => {
        const formGroup = service.createTripFormGroup(sampleWithRequiredData);
        expect(formGroup.controls.id.disabled).toBe(true);

        service.resetForm(formGroup, { id: null });

        expect(formGroup.controls.id.disabled).toBe(true);
      });
    });
  });
});
