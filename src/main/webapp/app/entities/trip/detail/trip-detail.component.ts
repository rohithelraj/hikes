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
      const eventIds = this.trip?.relatedEvents?.split(',');
      if (eventIds) {
        let index = 0;
        for (const eventId of eventIds) {
          this.eventPlanService.find(Number(eventId)).subscribe(event => {
            if (event.body) {
              this.events[index] = event.body;
              if (index === 0) {
                this.updatekomootUrl(<string>this.events[index].komootMap);
              }
              index++;
            }
          });
        }
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

  chooseEventTab(id: number, komootMap: string): void {
    this.updatekomootUrl(komootMap);
    this.removeEventTabClasses();
    // eslint-disable-next-line
    const tab = document.getElementById('home-tab-' + id);
    if (tab) {
      tab.className = 'nav-link active';
    }
    // eslint-disable-next-line
    const content = document.getElementById('home-' + id);
    if (content) {
      content.className = 'tab-pane fade show active';
    }
  }
  carouselPrevious(): void {
    // eslint-disable-next-line
    switchCarousel: {
      if (this.trip?.subImage1) {
        const carouselSubImage1 = document.getElementById('sub-image-1-carousel');

        if (carouselSubImage1?.className.includes('active')) {
          carouselSubImage1.className = 'carousel-item';
          if (this.trip.mainImage) {
            const carouselMainImage = document.getElementById('main-image-carousel');
            if (carouselMainImage) {
              carouselMainImage.className = 'carousel-item active';
              // eslint-disable-next-line
              break switchCarousel;
            }
          }
        }
      }
      if (this.trip?.subImage2) {
        const carouselSubImage2 = document.getElementById('sub-image-2-carousel');

        if (carouselSubImage2?.className.includes('active')) {
          carouselSubImage2.className = 'carousel-item';
          if (this.trip.subImage1) {
            const carouselSubImage1 = document.getElementById('sub-image-1-carousel');
            if (carouselSubImage1) {
              carouselSubImage1.className = 'carousel-item active';
              // eslint-disable-next-line
              break switchCarousel;
            }
          }
        }
      }
      if (this.trip?.subImage3) {
        const carouselSubImage3 = document.getElementById('sub-image-3-carousel');

        if (carouselSubImage3?.className.includes('active')) {
          carouselSubImage3.className = 'carousel-item';
          if (this.trip.subImage2) {
            const carouselSubImage2 = document.getElementById('sub-image-2-carousel');
            if (carouselSubImage2) {
              carouselSubImage2.className = 'carousel-item active';
              // eslint-disable-next-line
              break switchCarousel;
            }
          }
        }
      }
      if (this.trip?.subImage4) {
        const carouselSubImage4 = document.getElementById('sub-image-4-carousel');

        if (carouselSubImage4?.className.includes('active')) {
          carouselSubImage4.className = 'carousel-item';
          if (this.trip.subImage3) {
            const carouselSubImage3 = document.getElementById('sub-image-3-carousel');
            if (carouselSubImage3) {
              carouselSubImage3.className = 'carousel-item active';
              // eslint-disable-next-line
              break switchCarousel;
            }
          }
        }
      }
      if (this.trip?.subImage5) {
        const carouselSubImage5 = document.getElementById('sub-image-5-carousel');

        if (carouselSubImage5?.className.includes('active')) {
          carouselSubImage5.className = 'carousel-item';
          if (this.trip.subImage4) {
            const carouselSubImage4 = document.getElementById('sub-image-4-carousel');
            if (carouselSubImage4) {
              carouselSubImage4.className = 'carousel-item active';
              // eslint-disable-next-line
              break switchCarousel;
            }
          }
        }
      }
      if (this.trip?.subImage6) {
        const carouselSubImage6 = document.getElementById('sub-image-6-carousel');

        if (carouselSubImage6?.className.includes('active')) {
          carouselSubImage6.className = 'carousel-item';
          if (this.trip.subImage5) {
            const carouselSubImage5 = document.getElementById('sub-image-5-carousel');
            if (carouselSubImage5) {
              carouselSubImage5.className = 'carousel-item active';
              // eslint-disable-next-line
              break switchCarousel;
            }
          }
        }
      }
    }
  }
  chooseHighlightTab(s: string): void {
    this.removeHighlightTabClasses();
    const tab = document.getElementById('home-tab-sub-image-' + s);
    if (tab) {
      tab.className = 'nav-link active';
    }
    const content = document.getElementById('home-sub-image-content-' + s);
    if (content) {
      content.className = 'tab-pane fade show active';
    }
  }

  carouselNext(): void {
    // eslint-disable-next-line
    switchCarousel: {
      if (this.trip?.mainImage) {
        const carouselMainImage = document.getElementById('main-image-carousel');

        if (carouselMainImage?.className.includes('active')) {
          if (this.trip.subImage1) {
            carouselMainImage.className = 'carousel-item';
            const carouselSubImage1 = document.getElementById('sub-image-1-carousel');
            if (carouselSubImage1) {
              carouselSubImage1.className = 'carousel-item active';
              // eslint-disable-next-line
              break switchCarousel;
            }
          }
        }
      }
      if (this.trip?.subImage1) {
        const carouselSubImage1 = document.getElementById('sub-image-1-carousel');

        if (carouselSubImage1?.className.includes('active')) {
          if (this.trip.subImage2) {
            carouselSubImage1.className = 'carousel-item';
            const carouselSubImage2 = document.getElementById('sub-image-2-carousel');
            if (carouselSubImage2) {
              carouselSubImage2.className = 'carousel-item active';
              // eslint-disable-next-line
              break switchCarousel;
            }
          }
        }
      }
      if (this.trip?.subImage2) {
        const carouselSubImage2 = document.getElementById('sub-image-2-carousel');

        if (carouselSubImage2?.className.includes('active')) {
          if (this.trip.subImage3) {
            carouselSubImage2.className = 'carousel-item';
            const carouselSubImage3 = document.getElementById('sub-image-3-carousel');
            if (carouselSubImage3) {
              carouselSubImage3.className = 'carousel-item active';
              // eslint-disable-next-line
              break switchCarousel;
            }
          }
        }
      }
      if (this.trip?.subImage3) {
        const carouselSubImage3 = document.getElementById('sub-image-3-carousel');

        if (carouselSubImage3?.className.includes('active')) {
          if (this.trip.subImage4) {
            carouselSubImage3.className = 'carousel-item';
            const carouselSubImage4 = document.getElementById('sub-image-4-carousel');
            if (carouselSubImage4) {
              carouselSubImage4.className = 'carousel-item active';
              // eslint-disable-next-line
              break switchCarousel;
            }
          }
        }
      }
      if (this.trip?.subImage4) {
        const carouselSubImage4 = document.getElementById('sub-image-4-carousel');

        if (carouselSubImage4?.className.includes('active')) {
          if (this.trip.subImage5) {
            carouselSubImage4.className = 'carousel-item';
            const carouselSubImage5 = document.getElementById('sub-image-5-carousel');
            if (carouselSubImage5) {
              carouselSubImage5.className = 'carousel-item active';
              // eslint-disable-next-line
              break switchCarousel;
            }
          }
        }
      }
      if (this.trip?.subImage5) {
        const carouselSubImage5 = document.getElementById('sub-image-5-carousel');

        if (carouselSubImage5?.className.includes('active')) {
          if (this.trip.subImage6) {
            carouselSubImage5.className = 'carousel-item';
            const carouselSubImage6 = document.getElementById('sub-image-6-carousel');
            if (carouselSubImage6) {
              carouselSubImage6.className = 'carousel-item active';
              // eslint-disable-next-line
              break switchCarousel;
            }
          }
        }
      }
    }
  }
  private removeEventTabClasses(): void {
    const eventIds = this.trip?.relatedEvents?.split(',');
    if (eventIds) {
      for (const eventId of eventIds) {
        const tab = document.getElementById('home-tab-' + eventId);
        if (tab) {
          tab.className = 'nav-link';
        }
        const content = document.getElementById('home-' + eventId);
        if (content) {
          content.className = 'tab-pane fade';
        }
      }
    }
  }

  private removeHighlightTabClasses(): void {
    for (let i = 1; i < 7; i++) {
      // eslint-disable-next-line
      const tab = document.getElementById('home-tab-sub-image-' + i);
      if (tab) {
        tab.className = 'nav-link';
      }
      // eslint-disable-next-line
      const content = document.getElementById('home-sub-image-content-' + i);
      if (content) {
        content.className = 'tab-pane fade';
      }
    }
  }
}
