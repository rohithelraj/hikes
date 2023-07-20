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
  carouselNext() {
    switchCarousel: {
      if (this.trip?.mainImage) {
        let carouselMainImage = document.getElementById('main-image-carousel');
        // @ts-ignore
        if (carouselMainImage.className.includes('active')) {
          // @ts-ignore
          carouselMainImage.className = 'carousel-item';
          if (this.trip.subImage1) {
            let carouselSubImage1 = document.getElementById('sub-image-1-carousel');
            // @ts-ignore
            carouselSubImage1.className = 'carousel-item active';
            break switchCarousel;
          }
        }
      }
      if (this.trip?.subImage1) {
        let carouselSubImage1 = document.getElementById('sub-image-1-carousel');
        // @ts-ignore
        if (carouselSubImage1.className.includes('active')) {
          // @ts-ignore
          carouselSubImage1.className = 'carousel-item';
          if (this.trip.subImage2) {
            let carouselSubImage2 = document.getElementById('sub-image-2-carousel');
            // @ts-ignore
            carouselSubImage2.className = 'carousel-item active';
            break switchCarousel;
          }
        }
      }
      if (this.trip?.subImage2) {
        let carouselSubImage2 = document.getElementById('sub-image-2-carousel');
        // @ts-ignore
        if (carouselSubImage2.className.includes('active')) {
          // @ts-ignore
          carouselSubImage2.className = 'carousel-item';
          if (this.trip.subImage3) {
            let carouselSubImage3 = document.getElementById('sub-image-3-carousel');
            // @ts-ignore
            carouselSubImage3.className = 'carousel-item active';
            break switchCarousel;
          }
        }
      }
      if (this.trip?.subImage3) {
        let carouselSubImage3 = document.getElementById('sub-image-3-carousel');
        // @ts-ignore
        if (carouselSubImage3.className.includes('active')) {
          // @ts-ignore
          carouselSubImage3.className = 'carousel-item';
          if (this.trip.subImage4) {
            let carouselSubImage4 = document.getElementById('sub-image-4-carousel');
            // @ts-ignore
            carouselSubImage4.className = 'carousel-item active';
            break switchCarousel;
          }
        }
      }
      if (this.trip?.subImage4) {
        let carouselSubImage4 = document.getElementById('sub-image-4-carousel');
        // @ts-ignore
        if (carouselSubImage4.className.includes('active')) {
          // @ts-ignore
          carouselSubImage4.className = 'carousel-item';
          if (this.trip.subImage5) {
            let carouselSubImage5 = document.getElementById('sub-image-5-carousel');
            // @ts-ignore
            carouselSubImage5.className = 'carousel-item active';
            break switchCarousel;
          }
        }
      }
      if (this.trip?.subImage5) {
        let carouselSubImage5 = document.getElementById('sub-image-5-carousel');
        // @ts-ignore
        if (carouselSubImage5.className.includes('active')) {
          // @ts-ignore
          carouselSubImage5.className = 'carousel-item';
          if (this.trip.subImage6) {
            let carouselSubImage6 = document.getElementById('sub-image-6-carousel');
            // @ts-ignore
            carouselSubImage6.className = 'carousel-item active';
            break switchCarousel;
          }
        }
      }
    }
  }
  carouselPrevious() {
    switchCarousel: {
      if (this.trip?.subImage1) {
        let carouselSubImage1 = document.getElementById('sub-image-1-carousel');
        // @ts-ignore
        if (carouselSubImage1.className.includes('active')) {
          // @ts-ignore
          carouselSubImage1.className = 'carousel-item';
          if (this.trip.mainImage) {
            let carouselMainImage = document.getElementById('main-image-carousel');
            // @ts-ignore
            carouselMainImage.className = 'carousel-item active';
            break switchCarousel;
          }
        }
      }
      if (this.trip?.subImage2) {
        let carouselSubImage2 = document.getElementById('sub-image-2-carousel');
        // @ts-ignore
        if (carouselSubImage2.className.includes('active')) {
          // @ts-ignore
          carouselSubImage2.className = 'carousel-item';
          if (this.trip.subImage1) {
            let carouselSubImage1 = document.getElementById('sub-image-1-carousel');
            // @ts-ignore
            carouselSubImage1.className = 'carousel-item active';
            break switchCarousel;
          }
        }
      }
      if (this.trip?.subImage3) {
        let carouselSubImage3 = document.getElementById('sub-image-3-carousel');
        // @ts-ignore
        if (carouselSubImage3.className.includes('active')) {
          // @ts-ignore
          carouselSubImage3.className = 'carousel-item';
          if (this.trip.subImage2) {
            let carouselSubImage2 = document.getElementById('sub-image-2-carousel');
            // @ts-ignore
            carouselSubImage2.className = 'carousel-item active';
            break switchCarousel;
          }
        }
      }
      if (this.trip?.subImage4) {
        let carouselSubImage4 = document.getElementById('sub-image-4-carousel');
        // @ts-ignore
        if (carouselSubImage4.className.includes('active')) {
          // @ts-ignore
          carouselSubImage4.className = 'carousel-item';
          if (this.trip.subImage3) {
            let carouselSubImage3 = document.getElementById('sub-image-3-carousel');
            // @ts-ignore
            carouselSubImage3.className = 'carousel-item active';
            break switchCarousel;
          }
        }
      }
      if (this.trip?.subImage5) {
        let carouselSubImage5 = document.getElementById('sub-image-5-carousel');
        // @ts-ignore
        if (carouselSubImage5.className.includes('active')) {
          // @ts-ignore
          carouselSubImage5.className = 'carousel-item';
          if (this.trip.subImage4) {
            let carouselSubImage4 = document.getElementById('sub-image-4-carousel');
            // @ts-ignore
            carouselSubImage4.className = 'carousel-item active';
            break switchCarousel;
          }
        }
      }
      if (this.trip?.subImage6) {
        let carouselSubImage6 = document.getElementById('sub-image-6-carousel');
        // @ts-ignore
        if (carouselSubImage6.className.includes('active')) {
          // @ts-ignore
          carouselSubImage6.className = 'carousel-item';
          if (this.trip.subImage5) {
            let carouselSubImage5 = document.getElementById('sub-image-5-carousel');
            // @ts-ignore
            carouselSubImage5.className = 'carousel-item active';
            break switchCarousel;
          }
        }
      }
    }
  }
}
