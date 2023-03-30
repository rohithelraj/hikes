import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import dayjs from 'dayjs/esm';

import { isPresent } from 'app/core/util/operators';
import { DATE_FORMAT } from 'app/config/input.constants';
import { ApplicationConfigService } from 'app/core/config/application-config.service';
import { createRequestOption } from 'app/core/request/request-util';
import { IEventPlan, NewEventPlan } from '../event-plan.model';

export type PartialUpdateEventPlan = Partial<IEventPlan> & Pick<IEventPlan, 'id'>;

type RestOf<T extends IEventPlan | NewEventPlan> = Omit<T, 'eventDate' | 'eventStartTime' | 'eventEndTime'> & {
  eventDate?: string | null;
  eventStartTime?: string | null;
  eventEndTime?: string | null;
};

export type RestEventPlan = RestOf<IEventPlan>;

export type NewRestEventPlan = RestOf<NewEventPlan>;

export type PartialUpdateRestEventPlan = RestOf<PartialUpdateEventPlan>;

export type EntityResponseType = HttpResponse<IEventPlan>;
export type EntityArrayResponseType = HttpResponse<IEventPlan[]>;

@Injectable({ providedIn: 'root' })
export class EventPlanService {
  protected resourceUrl = this.applicationConfigService.getEndpointFor('api/event-plans');

  constructor(protected http: HttpClient, protected applicationConfigService: ApplicationConfigService) {}

  create(eventPlan: NewEventPlan): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(eventPlan);
    return this.http
      .post<RestEventPlan>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map(res => this.convertResponseFromServer(res)));
  }

  update(eventPlan: IEventPlan): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(eventPlan);
    return this.http
      .put<RestEventPlan>(`${this.resourceUrl}/${this.getEventPlanIdentifier(eventPlan)}`, copy, { observe: 'response' })
      .pipe(map(res => this.convertResponseFromServer(res)));
  }

  partialUpdate(eventPlan: PartialUpdateEventPlan): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(eventPlan);
    return this.http
      .patch<RestEventPlan>(`${this.resourceUrl}/${this.getEventPlanIdentifier(eventPlan)}`, copy, { observe: 'response' })
      .pipe(map(res => this.convertResponseFromServer(res)));
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http
      .get<RestEventPlan>(`${this.resourceUrl}/${id}`, { observe: 'response' })
      .pipe(map(res => this.convertResponseFromServer(res)));
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<RestEventPlan[]>(this.resourceUrl, { params: options, observe: 'response' })
      .pipe(map(res => this.convertResponseArrayFromServer(res)));
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  getEventPlanIdentifier(eventPlan: Pick<IEventPlan, 'id'>): number {
    return eventPlan.id;
  }

  compareEventPlan(o1: Pick<IEventPlan, 'id'> | null, o2: Pick<IEventPlan, 'id'> | null): boolean {
    return o1 && o2 ? this.getEventPlanIdentifier(o1) === this.getEventPlanIdentifier(o2) : o1 === o2;
  }

  addEventPlanToCollectionIfMissing<Type extends Pick<IEventPlan, 'id'>>(
    eventPlanCollection: Type[],
    ...eventPlansToCheck: (Type | null | undefined)[]
  ): Type[] {
    const eventPlans: Type[] = eventPlansToCheck.filter(isPresent);
    if (eventPlans.length > 0) {
      const eventPlanCollectionIdentifiers = eventPlanCollection.map(eventPlanItem => this.getEventPlanIdentifier(eventPlanItem)!);
      const eventPlansToAdd = eventPlans.filter(eventPlanItem => {
        const eventPlanIdentifier = this.getEventPlanIdentifier(eventPlanItem);
        if (eventPlanCollectionIdentifiers.includes(eventPlanIdentifier)) {
          return false;
        }
        eventPlanCollectionIdentifiers.push(eventPlanIdentifier);
        return true;
      });
      return [...eventPlansToAdd, ...eventPlanCollection];
    }
    return eventPlanCollection;
  }

  protected convertDateFromClient<T extends IEventPlan | NewEventPlan | PartialUpdateEventPlan>(eventPlan: T): RestOf<T> {
    return {
      ...eventPlan,
      eventDate: eventPlan.eventDate?.format(DATE_FORMAT) ?? null,
      eventStartTime: eventPlan.eventStartTime?.toJSON() ?? null,
      eventEndTime: eventPlan.eventEndTime?.toJSON() ?? null,
    };
  }

  protected convertDateFromServer(restEventPlan: RestEventPlan): IEventPlan {
    return {
      ...restEventPlan,
      eventDate: restEventPlan.eventDate ? dayjs(restEventPlan.eventDate) : undefined,
      eventStartTime: restEventPlan.eventStartTime ? dayjs(restEventPlan.eventStartTime) : undefined,
      eventEndTime: restEventPlan.eventEndTime ? dayjs(restEventPlan.eventEndTime) : undefined,
    };
  }

  protected convertResponseFromServer(res: HttpResponse<RestEventPlan>): HttpResponse<IEventPlan> {
    return res.clone({
      body: res.body ? this.convertDateFromServer(res.body) : null,
    });
  }

  protected convertResponseArrayFromServer(res: HttpResponse<RestEventPlan[]>): HttpResponse<IEventPlan[]> {
    return res.clone({
      body: res.body ? res.body.map(item => this.convertDateFromServer(item)) : null,
    });
  }
}
