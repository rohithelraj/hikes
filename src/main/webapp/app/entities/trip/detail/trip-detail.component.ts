import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ITrip } from '../trip.model';
import { DataUtils } from 'app/core/util/data-util.service';
import { IEventPlan } from '../../event-plan/event-plan.model';
import { EventPlanService } from '../../event-plan/service/event-plan.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'jhi-trip-detail',
  templateUrl: './trip-detail.component.html',
})
export class TripDetailComponent implements OnInit {
  trip: ITrip | null = null;
  events: IEventPlan[] = [];
  dangerousKomootUrl!: string;
  komootUrl!: SafeResourceUrl;
  googleMapsUrl!: SafeResourceUrl;
  dangerousGoogleMapsUrl!: string;
  constructor(
    protected dataUtils: DataUtils,
    protected activatedRoute: ActivatedRoute,
    protected eventPlanService: EventPlanService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ trip }) => {
      this.trip = trip;
      this.updateGoogleMapsUrl(<string>this.trip?.combinedMap);
      var eventIds = this.trip?.relatedEvents?.split(',');
      // @ts-ignore
      for (var eventId of eventIds) {
        var index = 0;
        this.eventPlanService.find(Number(eventId)).subscribe(event => {
          if (event.body) {
            this.events[index] = event.body;
            if (index == 0) {
              this.updatekomootUrl(<string>this.events[index].komootMap);
            }
            index++;
          }
        });
      }
    });
  }
  updatekomootUrl(id: string): void {
    this.dangerousKomootUrl = 'https://www.komoot.de/tour/' + id + '/embed?profile=1';
    this.komootUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.dangerousKomootUrl);
  }
  updateGoogleMapsUrl(id: string): void {
    this.dangerousGoogleMapsUrl = 'https://www.google.com/maps/d/embed?mid=' + id;
    this.googleMapsUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.dangerousGoogleMapsUrl);
  }
  byteSize(base64String: string): string {
    return this.dataUtils.byteSize(base64String);
  }

  openFile(base64String: string, contentType: string | null | undefined): void {
    this.dataUtils.openFile(base64String, contentType);
  }

  previousState(): void {
    window.history.back();
  }
  // @ts-ignore
  chooseEventTab(id: number, komootMap: string) {
    this.updatekomootUrl(komootMap);
    this.removeEventTabClasses();
    let tab = document.getElementById('home-tab-' + id);
    // @ts-ignore
    tab.className = 'nav-link active';
    let content = document.getElementById('home-' + id);
    // @ts-ignore
    content.className = 'tab-pane fade show active';
  }

  private removeEventTabClasses() {
    var eventIds = this.trip?.relatedEvents?.split(',');
    // @ts-ignore
    for (var eventId of eventIds) {
      let tab = document.getElementById('home-tab-' + eventId);
      // @ts-ignore
      tab.className = 'nav-link';
      let content = document.getElementById('home-' + eventId);
      // @ts-ignore
      content.className = 'tab-pane fade';
    }
  }

  chooseHighlightTab(s: string) {
    this.removeHighlightTabClasses();
    let tab = document.getElementById('home-tab-sub-image-' + s);
    // @ts-ignore
    tab.className = 'nav-link active';
    let content = document.getElementById('home-sub-image-content-' + s);
    // @ts-ignore
    content.className = 'tab-pane fade show active';
  }

  private removeHighlightTabClasses() {
    for (let i = 1; i < 7; i++) {
      let tab = document.getElementById('home-tab-sub-image-' + i);
      // @ts-ignore
      tab.className = 'nav-link';
      let content = document.getElementById('home-sub-image-content-' + i);
      // @ts-ignore
      content.className = 'tab-pane fade';
    }
  }
}
