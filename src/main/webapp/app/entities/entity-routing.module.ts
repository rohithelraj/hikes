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
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class EntityRoutingModule {}
