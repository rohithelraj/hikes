import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ITravelReport } from '../travel-report.model';
import { DataUtils } from 'app/core/util/data-util.service';

@Component({
  selector: 'jhi-travel-report-detail',
  templateUrl: './travel-report-detail.component.html',
})
export class TravelReportDetailComponent implements OnInit {
  travelReport: ITravelReport | null = null;

  constructor(protected dataUtils: DataUtils, protected activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ travelReport }) => {
      this.travelReport = travelReport;
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
      if (this.travelReport?.reportMainImage) {
        const carouselMainImage = document.getElementById('main-image-carousel');

        if (carouselMainImage?.className.includes('active')) {
          carouselMainImage.className = 'carousel-item';
          if (this.travelReport.reportSubImage1) {
            const carouselSubImage1 = document.getElementById('sub-image-1-carousel');
            if (carouselSubImage1) {
              carouselSubImage1.className = 'carousel-item active';
              // eslint-disable-next-line}
            }
          }
        }
        if (this.travelReport.reportSubImage1) {
          const carouselSubImage1 = document.getElementById('sub-image-1-carousel');

          if (carouselSubImage1?.className.includes('active')) {
            carouselSubImage1.className = 'carousel-item';
            if (this.travelReport.reportSubImage2) {
              const carouselSubImage2 = document.getElementById('sub-image-2-carousel');
              if (carouselSubImage2) {
                carouselSubImage2.className = 'carousel-item active';
                // eslint-disable-next-line
                break switchCarousel;
              }
            }
          }
        }
        if (this.travelReport.reportSubImage2) {
          const carouselSubImage2 = document.getElementById('sub-image-2-carousel');

          if (carouselSubImage2?.className.includes('active')) {
            carouselSubImage2.className = 'carousel-item';
            if (this.travelReport.reportSubImage3) {
              const carouselSubImage3 = document.getElementById('sub-image-3-carousel');
              if (carouselSubImage3) {
                carouselSubImage3.className = 'carousel-item active';
                // eslint-disable-next-line
                break switchCarousel;
              }
            }
          }
        }
        if (this.travelReport.reportSubImage3) {
          const carouselSubImage3 = document.getElementById('sub-image-3-carousel');

          if (carouselSubImage3?.className.includes('active')) {
            carouselSubImage3.className = 'carousel-item';
            if (this.travelReport.reportSubImage4) {
              const carouselSubImage4 = document.getElementById('sub-image-4-carousel');
              if (carouselSubImage4) {
                carouselSubImage4.className = 'carousel-item active';
                // eslint-disable-next-line
                break switchCarousel;
              }
            }
          }
        }
        if (this.travelReport.reportSubImage4) {
          const carouselSubImage4 = document.getElementById('sub-image-4-carousel');

          if (carouselSubImage4?.className.includes('active')) {
            carouselSubImage4.className = 'carousel-item';
            if (this.travelReport.reportSubImage5) {
              const carouselSubImage5 = document.getElementById('sub-image-5-carousel');
              if (carouselSubImage5) {
                carouselSubImage5.className = 'carousel-item active';
                // eslint-disable-next-line
                break switchCarousel;
              }
            }
          }
        }
        if (this.travelReport.reportSubImage5) {
          const carouselSubImage5 = document.getElementById('sub-image-5-carousel');

          if (carouselSubImage5?.className.includes('active')) {
            carouselSubImage5.className = 'carousel-item';
            if (this.travelReport.reportSubImage6) {
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
  }

  carouselPrevious(): void {
    // eslint-disable-next-line
    switchCarousel: {
      if (this.travelReport?.reportSubImage1) {
        const carouselSubImage1 = document.getElementById('sub-image-1-carousel');

        if (carouselSubImage1?.className.includes('active')) {
          carouselSubImage1.className = 'carousel-item';
          if (this.travelReport.reportMainImage) {
            const carouselMainImage = document.getElementById('main-image-carousel');
            if (carouselMainImage) {
              carouselMainImage.className = 'carousel-item active';
              // eslint-disable-next-line
              break switchCarousel;
            }
          }
        }
      }
      if (this.travelReport?.reportSubImage2) {
        const carouselSubImage2 = document.getElementById('sub-image-2-carousel');

        if (carouselSubImage2?.className.includes('active')) {
          carouselSubImage2.className = 'carousel-item';
          if (this.travelReport.reportSubImage1) {
            const carouselSubImage1 = document.getElementById('sub-image-1-carousel');
            if (carouselSubImage1) {
              carouselSubImage1.className = 'carousel-item active';
              // eslint-disable-next-line
              break switchCarousel;
            }
          }
        }
      }
      if (this.travelReport?.reportSubImage3) {
        const carouselSubImage3 = document.getElementById('sub-image-3-carousel');

        if (carouselSubImage3?.className.includes('active')) {
          carouselSubImage3.className = 'carousel-item';
          if (this.travelReport.reportSubImage2) {
            const carouselSubImage2 = document.getElementById('sub-image-2-carousel');
            if (carouselSubImage2) {
              carouselSubImage2.className = 'carousel-item active';
              // eslint-disable-next-line
              break switchCarousel;
            }
          }
        }
      }
      if (this.travelReport?.reportSubImage4) {
        const carouselSubImage4 = document.getElementById('sub-image-4-carousel');

        if (carouselSubImage4?.className.includes('active')) {
          carouselSubImage4.className = 'carousel-item';
          if (this.travelReport.reportSubImage3) {
            const carouselSubImage3 = document.getElementById('sub-image-3-carousel');
            if (carouselSubImage3) {
              carouselSubImage3.className = 'carousel-item active';
              // eslint-disable-next-line
              break switchCarousel;
            }
          }
        }
      }
      if (this.travelReport?.reportSubImage5) {
        const carouselSubImage5 = document.getElementById('sub-image-5-carousel');

        if (carouselSubImage5?.className.includes('active')) {
          carouselSubImage5.className = 'carousel-item';
          if (this.travelReport.reportSubImage4) {
            const carouselSubImage4 = document.getElementById('sub-image-4-carousel');
            if (carouselSubImage4) {
              carouselSubImage4.className = 'carousel-item active';
              // eslint-disable-next-line
              break switchCarousel;
            }
          }
        }
      }
      if (this.travelReport?.reportSubImage6) {
        const carouselSubImage6 = document.getElementById('sub-image-6-carousel');

        if (carouselSubImage6?.className.includes('active')) {
          carouselSubImage6.className = 'carousel-item';
          if (this.travelReport.reportSubImage5) {
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

  private removeSubImageTabClasses(): void {
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
