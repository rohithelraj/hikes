import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import dayjs from 'dayjs/esm';

import { isPresent } from 'app/core/util/operators';
import { DATE_FORMAT } from 'app/config/input.constants';
import { ApplicationConfigService } from 'app/core/config/application-config.service';
import { createRequestOption } from 'app/core/request/request-util';
import { ITravelReport, NewTravelReport } from '../travel-report.model';

export type PartialUpdateTravelReport = Partial<ITravelReport> & Pick<ITravelReport, 'id'>;

type RestOf<T extends ITravelReport | NewTravelReport> = Omit<T, 'reportDate'> & {
  reportDate?: string | null;
};

export type RestTravelReport = RestOf<ITravelReport>;

export type NewRestTravelReport = RestOf<NewTravelReport>;

export type PartialUpdateRestTravelReport = RestOf<PartialUpdateTravelReport>;

export type EntityResponseType = HttpResponse<ITravelReport>;
export type EntityArrayResponseType = HttpResponse<ITravelReport[]>;

@Injectable({ providedIn: 'root' })
export class TravelReportService {
  protected resourceUrl = this.applicationConfigService.getEndpointFor('api/travel-reports');

  constructor(protected http: HttpClient, protected applicationConfigService: ApplicationConfigService) {}

  create(travelReport: NewTravelReport): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(travelReport);
    return this.http
      .post<RestTravelReport>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map(res => this.convertResponseFromServer(res)));
  }

  update(travelReport: ITravelReport): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(travelReport);
    return this.http
      .put<RestTravelReport>(`${this.resourceUrl}/${this.getTravelReportIdentifier(travelReport)}`, copy, { observe: 'response' })
      .pipe(map(res => this.convertResponseFromServer(res)));
  }

  partialUpdate(travelReport: PartialUpdateTravelReport): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(travelReport);
    return this.http
      .patch<RestTravelReport>(`${this.resourceUrl}/${this.getTravelReportIdentifier(travelReport)}`, copy, { observe: 'response' })
      .pipe(map(res => this.convertResponseFromServer(res)));
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http
      .get<RestTravelReport>(`${this.resourceUrl}/${id}`, { observe: 'response' })
      .pipe(map(res => this.convertResponseFromServer(res)));
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<RestTravelReport[]>(this.resourceUrl, { params: options, observe: 'response' })
      .pipe(map(res => this.convertResponseArrayFromServer(res)));
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  getTravelReportIdentifier(travelReport: Pick<ITravelReport, 'id'>): number {
    return travelReport.id;
  }

  compareTravelReport(o1: Pick<ITravelReport, 'id'> | null, o2: Pick<ITravelReport, 'id'> | null): boolean {
    return o1 && o2 ? this.getTravelReportIdentifier(o1) === this.getTravelReportIdentifier(o2) : o1 === o2;
  }

  addTravelReportToCollectionIfMissing<Type extends Pick<ITravelReport, 'id'>>(
    travelReportCollection: Type[],
    ...travelReportsToCheck: (Type | null | undefined)[]
  ): Type[] {
    const travelReports: Type[] = travelReportsToCheck.filter(isPresent);
    if (travelReports.length > 0) {
      const travelReportCollectionIdentifiers = travelReportCollection.map(
        travelReportItem => this.getTravelReportIdentifier(travelReportItem)!
      );
      const travelReportsToAdd = travelReports.filter(travelReportItem => {
        const travelReportIdentifier = this.getTravelReportIdentifier(travelReportItem);
        if (travelReportCollectionIdentifiers.includes(travelReportIdentifier)) {
          return false;
        }
        travelReportCollectionIdentifiers.push(travelReportIdentifier);
        return true;
      });
      return [...travelReportsToAdd, ...travelReportCollection];
    }
    return travelReportCollection;
  }

  protected convertDateFromClient<T extends ITravelReport | NewTravelReport | PartialUpdateTravelReport>(travelReport: T): RestOf<T> {
    return {
      ...travelReport,
      reportDate: travelReport.reportDate?.format(DATE_FORMAT) ?? null,
    };
  }

  protected convertDateFromServer(restTravelReport: RestTravelReport): ITravelReport {
    return {
      ...restTravelReport,
      reportDate: restTravelReport.reportDate ? dayjs(restTravelReport.reportDate) : undefined,
    };
  }

  protected convertResponseFromServer(res: HttpResponse<RestTravelReport>): HttpResponse<ITravelReport> {
    return res.clone({
      body: res.body ? this.convertDateFromServer(res.body) : null,
    });
  }

  protected convertResponseArrayFromServer(res: HttpResponse<RestTravelReport[]>): HttpResponse<ITravelReport[]> {
    return res.clone({
      body: res.body ? res.body.map(item => this.convertDateFromServer(item)) : null,
    });
  }
}
