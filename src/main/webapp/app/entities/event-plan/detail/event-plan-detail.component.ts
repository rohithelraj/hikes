import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { IEventPlan } from '../event-plan.model';
import { DataUtils } from 'app/core/util/data-util.service';

@Component({
  selector: 'jhi-event-plan-detail',
  templateUrl: './event-plan-detail.component.html',
  styleUrls: ['./event-plan-detail.component.scss'],
})
export class EventPlanDetailComponent implements OnInit {
  eventPlan: IEventPlan | null = null;
  dangerousKomootUrl!: string;
  komootUrl!: SafeResourceUrl;

  constructor(protected dataUtils: DataUtils, protected activatedRoute: ActivatedRoute, private sanitizer: DomSanitizer) {}

  updatekomootUrl(id: string): void {
    // Appending an ID to a YouTube URL is safe.
    // Always make sure to construct SafeValue objects as
    // close as possible to the input data so
    // that it's easier to check if the value is safe.
    this.dangerousKomootUrl = 'https://www.komoot.de/tour/' + id + '/embed?profile=1';
    this.komootUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.dangerousKomootUrl);
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ eventPlan }) => {
      this.eventPlan = eventPlan;
      this.updatekomootUrl(<string>this.eventPlan?.komootMap);
    });
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

  chooseSubImageTab(s: string): void {
    this.removeSubImageTabClasses();
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
      if (this.eventPlan?.hikeMainImage) {
        const carouselMainImage = document.getElementById('main-image-carousel');

        if (carouselMainImage?.className.includes('active')) {
          carouselMainImage.className = 'carousel-item';
          if (this.eventPlan.hikeHighlightImage1) {
            const carouselSubImage1 = document.getElementById('sub-image-1-carousel');
            if (carouselSubImage1) {
              carouselSubImage1.className = 'carousel-item active';
              // eslint-disable-next-line
              break switchCarousel;
            }
          }
        }
      }
      if (this.eventPlan?.hikeHighlightImage1) {
        const carouselSubImage1 = document.getElementById('sub-image-1-carousel');

        if (carouselSubImage1?.className.includes('active')) {
          carouselSubImage1.className = 'carousel-item';
          if (this.eventPlan.hikeHighlightImage2) {
            const carouselSubImage2 = document.getElementById('sub-image-2-carousel');
            if (carouselSubImage2) {
              carouselSubImage2.className = 'carousel-item active';
              // eslint-disable-next-line
              break switchCarousel;
            }
          }
        }
      }
    }
  }

  carouselPrevious(): void {
    // eslint-disable-next-line
    switchCarousel: {
      if (this.eventPlan?.hikeHighlightImage1) {
        const carouselSubImage1 = document.getElementById('sub-image-1-carousel');

        if (carouselSubImage1?.className.includes('active')) {
          carouselSubImage1.className = 'carousel-item';
          if (this.eventPlan.hikeMainImage) {
            const carouselMainImage = document.getElementById('main-image-carousel');
            if (carouselMainImage) {
              carouselMainImage.className = 'carousel-item active';
              // eslint-disable-next-line
              break switchCarousel;
            }
          }
        }
      }
      if (this.eventPlan?.hikeHighlightImage2) {
        const carouselSubImage2 = document.getElementById('sub-image-2-carousel');

        if (carouselSubImage2?.className.includes('active')) {
          carouselSubImage2.className = 'carousel-item';
          if (this.eventPlan.hikeHighlightImage1) {
            const carouselSubImage1 = document.getElementById('sub-image-1-carousel');
            if (carouselSubImage1) {
              carouselSubImage1.className = 'carousel-item active';
              // eslint-disable-next-line
              break switchCarousel;
            }
          }
        }
      }
    }
  }
  private removeSubImageTabClasses(): void {
    for (let i = 1; i < 3; i++) {
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
