import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import { ITravelReport } from '../travel-report.model';
import { TravelReportService } from '../service/travel-report.service';

@Injectable({ providedIn: 'root' })
export class TravelReportRoutingResolveService implements Resolve<ITravelReport | null> {
  constructor(protected service: TravelReportService, protected router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<ITravelReport | null | never> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        mergeMap((travelReport: HttpResponse<ITravelReport>) => {
          if (travelReport.body) {
            return of(travelReport.body);
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
