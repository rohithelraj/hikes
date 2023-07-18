import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'event-plan',
        data: { pageTitle: 'hikesApp.eventPlan.home.title' },
        loadChildren: () => import('./event-plan/event-plan.module').then(m => m.EventPlanModule),
      },
      {
        path: 'trip',
        data: { pageTitle: 'hikesApp.trip.home.title' },
        loadChildren: () => import('./trip/trip.module').then(m => m.TripModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class EntityRoutingModule {}
