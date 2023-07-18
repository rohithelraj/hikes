import { TestBed } from '@angular/core/testing';

import { sampleWithRequiredData, sampleWithNewData } from '../travel-report.test-samples';

import { TravelReportFormService } from './travel-report-form.service';

describe('TravelReport Form Service', () => {
  let service: TravelReportFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TravelReportFormService);
  });

  describe('Service methods', () => {
    describe('createTravelReportFormGroup', () => {
      it('should create a new form with FormControl', () => {
        const formGroup = service.createTravelReportFormGroup();

        expect(formGroup.controls).toEqual(
          expect.objectContaining({
            id: expect.any(Object),
            reportName: expect.any(Object),
            reportDate: expect.any(Object),
            reportEventIds: expect.any(Object),
            reportDescription: expect.any(Object),
            reportMainImage: expect.any(Object),
            reportSubImage1: expect.any(Object),
            reportSubImageName: expect.any(Object),
            reportSubImage1Description: expect.any(Object),
            reportSubImage2: expect.any(Object),
            reportSubImage2Name: expect.any(Object),
            reportSubImage2Description: expect.any(Object),
            reportSubImage3: expect.any(Object),
            reportSubImage3Name: expect.any(Object),
            reportSubImage3Description: expect.any(Object),
            reportSubImage4: expect.any(Object),
            reportSubImage4Name: expect.any(Object),
            reportSubImage4Description: expect.any(Object),
            reportSubImage5: expect.any(Object),
            reportSubImage5Name: expect.any(Object),
            reportSubImage5Description: expect.any(Object),
            reportSubImage6: expect.any(Object),
            reportSubImage6Name: expect.any(Object),
            reportSubImage6Description: expect.any(Object),
            trip: expect.any(Object),
          })
        );
      });

      it('passing ITravelReport should create a new form with FormGroup', () => {
        const formGroup = service.createTravelReportFormGroup(sampleWithRequiredData);

        expect(formGroup.controls).toEqual(
          expect.objectContaining({
            id: expect.any(Object),
            reportName: expect.any(Object),
            reportDate: expect.any(Object),
            reportEventIds: expect.any(Object),
            reportDescription: expect.any(Object),
            reportMainImage: expect.any(Object),
            reportSubImage1: expect.any(Object),
            reportSubImageName: expect.any(Object),
            reportSubImage1Description: expect.any(Object),
            reportSubImage2: expect.any(Object),
            reportSubImage2Name: expect.any(Object),
            reportSubImage2Description: expect.any(Object),
            reportSubImage3: expect.any(Object),
            reportSubImage3Name: expect.any(Object),
            reportSubImage3Description: expect.any(Object),
            reportSubImage4: expect.any(Object),
            reportSubImage4Name: expect.any(Object),
            reportSubImage4Description: expect.any(Object),
            reportSubImage5: expect.any(Object),
            reportSubImage5Name: expect.any(Object),
            reportSubImage5Description: expect.any(Object),
            reportSubImage6: expect.any(Object),
            reportSubImage6Name: expect.any(Object),
            reportSubImage6Description: expect.any(Object),
            trip: expect.any(Object),
          })
        );
      });
    });

    describe('getTravelReport', () => {
      it('should return NewTravelReport for default TravelReport initial value', () => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const formGroup = service.createTravelReportFormGroup(sampleWithNewData);

        const travelReport = service.getTravelReport(formGroup) as any;

        expect(travelReport).toMatchObject(sampleWithNewData);
      });

      it('should return NewTravelReport for empty TravelReport initial value', () => {
        const formGroup = service.createTravelReportFormGroup();

        const travelReport = service.getTravelReport(formGroup) as any;

        expect(travelReport).toMatchObject({});
      });

      it('should return ITravelReport', () => {
        const formGroup = service.createTravelReportFormGroup(sampleWithRequiredData);

        const travelReport = service.getTravelReport(formGroup) as any;

        expect(travelReport).toMatchObject(sampleWithRequiredData);
      });
    });

    describe('resetForm', () => {
      it('passing ITravelReport should not enable id FormControl', () => {
        const formGroup = service.createTravelReportFormGroup();
        expect(formGroup.controls.id.disabled).toBe(true);

        service.resetForm(formGroup, sampleWithRequiredData);

        expect(formGroup.controls.id.disabled).toBe(true);
      });

      it('passing NewTravelReport should disable id FormControl', () => {
        const formGroup = service.createTravelReportFormGroup(sampleWithRequiredData);
        expect(formGroup.controls.id.disabled).toBe(true);

        service.resetForm(formGroup, { id: null });

        expect(formGroup.controls.id.disabled).toBe(true);
      });
    });
  });
});
