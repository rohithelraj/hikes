import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { DATE_FORMAT } from 'app/config/input.constants';
import { ITravelReport } from '../travel-report.model';
import { sampleWithRequiredData, sampleWithNewData, sampleWithPartialData, sampleWithFullData } from '../travel-report.test-samples';

import { TravelReportService, RestTravelReport } from './travel-report.service';

const requireRestSample: RestTravelReport = {
  ...sampleWithRequiredData,
  reportDate: sampleWithRequiredData.reportDate?.format(DATE_FORMAT),
};

describe('TravelReport Service', () => {
  let service: TravelReportService;
  let httpMock: HttpTestingController;
  let expectedResult: ITravelReport | ITravelReport[] | boolean | null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    expectedResult = null;
    service = TestBed.inject(TravelReportService);
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

    it('should create a TravelReport', () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const travelReport = { ...sampleWithNewData };
      const returnedFromService = { ...requireRestSample };
      const expected = { ...sampleWithRequiredData };

      service.create(travelReport).subscribe(resp => (expectedResult = resp.body));

      const req = httpMock.expectOne({ method: 'POST' });
      req.flush(returnedFromService);
      expect(expectedResult).toMatchObject(expected);
    });

    it('should update a TravelReport', () => {
      const travelReport = { ...sampleWithRequiredData };
      const returnedFromService = { ...requireRestSample };
      const expected = { ...sampleWithRequiredData };

      service.update(travelReport).subscribe(resp => (expectedResult = resp.body));

      const req = httpMock.expectOne({ method: 'PUT' });
      req.flush(returnedFromService);
      expect(expectedResult).toMatchObject(expected);
    });

    it('should partial update a TravelReport', () => {
      const patchObject = { ...sampleWithPartialData };
      const returnedFromService = { ...requireRestSample };
      const expected = { ...sampleWithRequiredData };

      service.partialUpdate(patchObject).subscribe(resp => (expectedResult = resp.body));

      const req = httpMock.expectOne({ method: 'PATCH' });
      req.flush(returnedFromService);
      expect(expectedResult).toMatchObject(expected);
    });

    it('should return a list of TravelReport', () => {
      const returnedFromService = { ...requireRestSample };

      const expected = { ...sampleWithRequiredData };

      service.query().subscribe(resp => (expectedResult = resp.body));

      const req = httpMock.expectOne({ method: 'GET' });
      req.flush([returnedFromService]);
      httpMock.verify();
      expect(expectedResult).toMatchObject([expected]);
    });

    it('should delete a TravelReport', () => {
      const expected = true;

      service.delete(123).subscribe(resp => (expectedResult = resp.ok));

      const req = httpMock.expectOne({ method: 'DELETE' });
      req.flush({ status: 200 });
      expect(expectedResult).toBe(expected);
    });

    describe('addTravelReportToCollectionIfMissing', () => {
      it('should add a TravelReport to an empty array', () => {
        const travelReport: ITravelReport = sampleWithRequiredData;
        expectedResult = service.addTravelReportToCollectionIfMissing([], travelReport);
        expect(expectedResult).toHaveLength(1);
        expect(expectedResult).toContain(travelReport);
      });

      it('should not add a TravelReport to an array that contains it', () => {
        const travelReport: ITravelReport = sampleWithRequiredData;
        const travelReportCollection: ITravelReport[] = [
          {
            ...travelReport,
          },
          sampleWithPartialData,
        ];
        expectedResult = service.addTravelReportToCollectionIfMissing(travelReportCollection, travelReport);
        expect(expectedResult).toHaveLength(2);
      });

      it("should add a TravelReport to an array that doesn't contain it", () => {
        const travelReport: ITravelReport = sampleWithRequiredData;
        const travelReportCollection: ITravelReport[] = [sampleWithPartialData];
        expectedResult = service.addTravelReportToCollectionIfMissing(travelReportCollection, travelReport);
        expect(expectedResult).toHaveLength(2);
        expect(expectedResult).toContain(travelReport);
      });

      it('should add only unique TravelReport to an array', () => {
        const travelReportArray: ITravelReport[] = [sampleWithRequiredData, sampleWithPartialData, sampleWithFullData];
        const travelReportCollection: ITravelReport[] = [sampleWithRequiredData];
        expectedResult = service.addTravelReportToCollectionIfMissing(travelReportCollection, ...travelReportArray);
        expect(expectedResult).toHaveLength(3);
      });

      it('should accept varargs', () => {
        const travelReport: ITravelReport = sampleWithRequiredData;
        const travelReport2: ITravelReport = sampleWithPartialData;
        expectedResult = service.addTravelReportToCollectionIfMissing([], travelReport, travelReport2);
        expect(expectedResult).toHaveLength(2);
        expect(expectedResult).toContain(travelReport);
        expect(expectedResult).toContain(travelReport2);
      });

      it('should accept null and undefined values', () => {
        const travelReport: ITravelReport = sampleWithRequiredData;
        expectedResult = service.addTravelReportToCollectionIfMissing([], null, travelReport, undefined);
        expect(expectedResult).toHaveLength(1);
        expect(expectedResult).toContain(travelReport);
      });

      it('should return initial array if no TravelReport is added', () => {
        const travelReportCollection: ITravelReport[] = [sampleWithRequiredData];
        expectedResult = service.addTravelReportToCollectionIfMissing(travelReportCollection, undefined, null);
        expect(expectedResult).toEqual(travelReportCollection);
      });
    });

    describe('compareTravelReport', () => {
      it('Should return true if both entities are null', () => {
        const entity1 = null;
        const entity2 = null;

        const compareResult = service.compareTravelReport(entity1, entity2);

        expect(compareResult).toEqual(true);
      });

      it('Should return false if one entity is null', () => {
        const entity1 = { id: 123 };
        const entity2 = null;

        const compareResult1 = service.compareTravelReport(entity1, entity2);
        const compareResult2 = service.compareTravelReport(entity2, entity1);

        expect(compareResult1).toEqual(false);
        expect(compareResult2).toEqual(false);
      });

      it('Should return false if primaryKey differs', () => {
        const entity1 = { id: 123 };
        const entity2 = { id: 456 };

        const compareResult1 = service.compareTravelReport(entity1, entity2);
        const compareResult2 = service.compareTravelReport(entity2, entity1);

        expect(compareResult1).toEqual(false);
        expect(compareResult2).toEqual(false);
      });

      it('Should return false if primaryKey matches', () => {
        const entity1 = { id: 123 };
        const entity2 = { id: 123 };

        const compareResult1 = service.compareTravelReport(entity1, entity2);
        const compareResult2 = service.compareTravelReport(entity2, entity1);

        expect(compareResult1).toEqual(true);
        expect(compareResult2).toEqual(true);
      });
    });
  });

  afterEach(() => {
    httpMock.verify();
  });
});
