import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { DATE_FORMAT } from 'app/config/input.constants';
import { IEventPlan } from '../event-plan.model';
import { sampleWithRequiredData, sampleWithNewData, sampleWithPartialData, sampleWithFullData } from '../event-plan.test-samples';

import { EventPlanService, RestEventPlan } from './event-plan.service';

const requireRestSample: RestEventPlan = {
  ...sampleWithRequiredData,
  eventDate: sampleWithRequiredData.eventDate?.format(DATE_FORMAT),
  eventStartTime: sampleWithRequiredData.eventStartTime?.toJSON(),
  eventEndTime: sampleWithRequiredData.eventEndTime?.toJSON(),
};

describe('EventPlan Service', () => {
  let service: EventPlanService;
  let httpMock: HttpTestingController;
  let expectedResult: IEventPlan | IEventPlan[] | boolean | null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    expectedResult = null;
    service = TestBed.inject(EventPlanService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  describe('Service methods', () => {
    it('should find an element', () => {
      const returnedFromService = { ...requireRestSample };
      const expected = { ...sampleWithRequiredData };

      service.find(123).subscribe(resp => (expectedResult = resp.body));

      const req = httpMock.expectOne({ method: 'GET' });
      req.flush(returnedFromService);
      expect(expectedResult).toMatchObject(expected);
    });

    it('should create a EventPlan', () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const eventPlan = { ...sampleWithNewData };
      const returnedFromService = { ...requireRestSample };
      const expected = { ...sampleWithRequiredData };

      service.create(eventPlan).subscribe(resp => (expectedResult = resp.body));

      const req = httpMock.expectOne({ method: 'POST' });
      req.flush(returnedFromService);
      expect(expectedResult).toMatchObject(expected);
    });

    it('should update a EventPlan', () => {
      const eventPlan = { ...sampleWithRequiredData };
      const returnedFromService = { ...requireRestSample };
      const expected = { ...sampleWithRequiredData };

      service.update(eventPlan).subscribe(resp => (expectedResult = resp.body));

      const req = httpMock.expectOne({ method: 'PUT' });
      req.flush(returnedFromService);
      expect(expectedResult).toMatchObject(expected);
    });

    it('should partial update a EventPlan', () => {
      const patchObject = { ...sampleWithPartialData };
      const returnedFromService = { ...requireRestSample };
      const expected = { ...sampleWithRequiredData };

      service.partialUpdate(patchObject).subscribe(resp => (expectedResult = resp.body));

      const req = httpMock.expectOne({ method: 'PATCH' });
      req.flush(returnedFromService);
      expect(expectedResult).toMatchObject(expected);
    });

    it('should return a list of EventPlan', () => {
      const returnedFromService = { ...requireRestSample };

      const expected = { ...sampleWithRequiredData };

      service.query().subscribe(resp => (expectedResult = resp.body));

      const req = httpMock.expectOne({ method: 'GET' });
      req.flush([returnedFromService]);
      httpMock.verify();
      expect(expectedResult).toMatchObject([expected]);
    });

    it('should delete a EventPlan', () => {
      const expected = true;

      service.delete(123).subscribe(resp => (expectedResult = resp.ok));

      const req = httpMock.expectOne({ method: 'DELETE' });
      req.flush({ status: 200 });
      expect(expectedResult).toBe(expected);
    });

    describe('addEventPlanToCollectionIfMissing', () => {
      it('should add a EventPlan to an empty array', () => {
        const eventPlan: IEventPlan = sampleWithRequiredData;
        expectedResult = service.addEventPlanToCollectionIfMissing([], eventPlan);
        expect(expectedResult).toHaveLength(1);
        expect(expectedResult).toContain(eventPlan);
      });

      it('should not add a EventPlan to an array that contains it', () => {
        const eventPlan: IEventPlan = sampleWithRequiredData;
        const eventPlanCollection: IEventPlan[] = [
          {
            ...eventPlan,
          },
          sampleWithPartialData,
        ];
        expectedResult = service.addEventPlanToCollectionIfMissing(eventPlanCollection, eventPlan);
        expect(expectedResult).toHaveLength(2);
      });

      it("should add a EventPlan to an array that doesn't contain it", () => {
        const eventPlan: IEventPlan = sampleWithRequiredData;
        const eventPlanCollection: IEventPlan[] = [sampleWithPartialData];
        expectedResult = service.addEventPlanToCollectionIfMissing(eventPlanCollection, eventPlan);
        expect(expectedResult).toHaveLength(2);
        expect(expectedResult).toContain(eventPlan);
      });

      it('should add only unique EventPlan to an array', () => {
        const eventPlanArray: IEventPlan[] = [sampleWithRequiredData, sampleWithPartialData, sampleWithFullData];
        const eventPlanCollection: IEventPlan[] = [sampleWithRequiredData];
        expectedResult = service.addEventPlanToCollectionIfMissing(eventPlanCollection, ...eventPlanArray);
        expect(expectedResult).toHaveLength(3);
      });

      it('should accept varargs', () => {
        const eventPlan: IEventPlan = sampleWithRequiredData;
        const eventPlan2: IEventPlan = sampleWithPartialData;
        expectedResult = service.addEventPlanToCollectionIfMissing([], eventPlan, eventPlan2);
        expect(expectedResult).toHaveLength(2);
        expect(expectedResult).toContain(eventPlan);
        expect(expectedResult).toContain(eventPlan2);
      });

      it('should accept null and undefined values', () => {
        const eventPlan: IEventPlan = sampleWithRequiredData;
        expectedResult = service.addEventPlanToCollectionIfMissing([], null, eventPlan, undefined);
        expect(expectedResult).toHaveLength(1);
        expect(expectedResult).toContain(eventPlan);
      });

      it('should return initial array if no EventPlan is added', () => {
        const eventPlanCollection: IEventPlan[] = [sampleWithRequiredData];
        expectedResult = service.addEventPlanToCollectionIfMissing(eventPlanCollection, undefined, null);
        expect(expectedResult).toEqual(eventPlanCollection);
      });
    });

    describe('compareEventPlan', () => {
      it('Should return true if both entities are null', () => {
        const entity1 = null;
        const entity2 = null;

        const compareResult = service.compareEventPlan(entity1, entity2);

        expect(compareResult).toEqual(true);
      });

      it('Should return false if one entity is null', () => {
        const entity1 = { id: 123 };
        const entity2 = null;

        const compareResult1 = service.compareEventPlan(entity1, entity2);
        const compareResult2 = service.compareEventPlan(entity2, entity1);

        expect(compareResult1).toEqual(false);
        expect(compareResult2).toEqual(false);
      });

      it('Should return false if primaryKey differs', () => {
        const entity1 = { id: 123 };
        const entity2 = { id: 456 };

        const compareResult1 = service.compareEventPlan(entity1, entity2);
        const compareResult2 = service.compareEventPlan(entity2, entity1);

        expect(compareResult1).toEqual(false);
        expect(compareResult2).toEqual(false);
      });

      it('Should return false if primaryKey matches', () => {
        const entity1 = { id: 123 };
        const entity2 = { id: 123 };

        const compareResult1 = service.compareEventPlan(entity1, entity2);
        const compareResult2 = service.compareEventPlan(entity2, entity1);

        expect(compareResult1).toEqual(true);
        expect(compareResult2).toEqual(true);
      });
    });
  });

  afterEach(() => {
    httpMock.verify();
  });
});
