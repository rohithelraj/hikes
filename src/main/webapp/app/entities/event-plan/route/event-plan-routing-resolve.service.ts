import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import { IEventPlan } from '../event-plan.model';
import { EventPlanService } from '../service/event-plan.service';

@Injectable({ providedIn: 'root' })
export class EventPlanRoutingResolveService implements Resolve<IEventPlan | null> {
  constructor(protected service: EventPlanService, protected router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IEventPlan | null | never> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        mergeMap((eventPlan: HttpResponse<IEventPlan>) => {
          if (eventPlan.body) {
            return of(eventPlan.body);
          } else {
            this.router.navigate(['404']);
            return EMPTY;
          }
        })
      );
    }
    return of(null);
  }
}
