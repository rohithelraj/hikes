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

  chooseSubImageTab(s: string) {
    this.removeSubImageTabClasses();
    let tab = document.getElementById('home-tab-sub-image-' + s);
    // @ts-ignore
    tab.className = 'nav-link active';
    let content = document.getElementById('home-sub-image-content-' + s);
    // @ts-ignore
    content.className = 'tab-pane fade show active';
  }

  private removeSubImageTabClasses() {
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
    if (this.travelReport?.reportMainImage) {
      let carouselMainImage = document.getElementById('main-image-carousel');
      // @ts-ignore
      if (carouselMainImage.className.includes('active')) {
        // @ts-ignore
        carouselMainImage.className = 'carousel-item';
        if (this.travelReport.reportSubImage1) {
          let carouselSubImage1 = document.getElementById('sub-image-1-carousel');
          // @ts-ignore
          carouselSubImage1.className = 'carousel-item active';
        }
      }
    }
    if (this.travelReport?.reportSubImage1) {
      let carouselSubImage1 = document.getElementById('sub-image-1-carousel');
      // @ts-ignore
      if (carouselSubImage1.className.includes('active')) {
        // @ts-ignore
        carouselSubImage1.className = 'carousel-item';
        if (this.travelReport.reportSubImage2) {
          let carouselSubImage2 = document.getElementById('sub-image-2-carousel');
          // @ts-ignore
          carouselSubImage2.className = 'carousel-item active';
        }
      }
    }
    if (this.travelReport?.reportSubImage2) {
      let carouselSubImage2 = document.getElementById('sub-image-2-carousel');
      // @ts-ignore
      if (carouselSubImage2.className.includes('active')) {
        // @ts-ignore
        carouselSubImage2.className = 'carousel-item';
        if (this.travelReport.reportSubImage3) {
          let carouselSubImage3 = document.getElementById('sub-image-3-carousel');
          // @ts-ignore
          carouselSubImage3.className = 'carousel-item active';
        }
      }
    }
    if (this.travelReport?.reportSubImage3) {
      let carouselSubImage3 = document.getElementById('sub-image-3-carousel');
      // @ts-ignore
      if (carouselSubImage3.className.includes('active')) {
        // @ts-ignore
        carouselSubImage3.className = 'carousel-item';
        if (this.travelReport.reportSubImage4) {
          let carouselSubImage4 = document.getElementById('sub-image-4-carousel');
          // @ts-ignore
          carouselSubImage4.className = 'carousel-item active';
        }
      }
    }
    if (this.travelReport?.reportSubImage4) {
      let carouselSubImage4 = document.getElementById('sub-image-4-carousel');
      // @ts-ignore
      if (carouselSubImage4.className.includes('active')) {
        // @ts-ignore
        carouselSubImage4.className = 'carousel-item';
        if (this.travelReport.reportSubImage5) {
          let carouselSubImage5 = document.getElementById('sub-image-5-carousel');
          // @ts-ignore
          carouselSubImage5.className = 'carousel-item active';
        }
      }
    }
    if (this.travelReport?.reportSubImage5) {
      let carouselSubImage5 = document.getElementById('sub-image-5-carousel');
      // @ts-ignore
      if (carouselSubImage5.className.includes('active')) {
        // @ts-ignore
        carouselSubImage5.className = 'carousel-item';
        if (this.travelReport.reportSubImage6) {
          let carouselSubImage6 = document.getElementById('sub-image-6-carousel');
          // @ts-ignore
          carouselSubImage6.className = 'carousel-item active';
        }
      }
    }
  }
  carouselPrevious() {
    if (this.travelReport?.reportSubImage1) {
      let carouselSubImage1 = document.getElementById('sub-image-1-carousel');
      // @ts-ignore
      if (carouselSubImage1.className.includes('active')) {
        // @ts-ignore
        carouselSubImage1.className = 'carousel-item';
        if (this.travelReport.reportMainImage) {
          let carouselMainImage = document.getElementById('main-image-carousel');
          // @ts-ignore
          carouselMainImage.className = 'carousel-item active';
        }
      }
    }
    if (this.travelReport?.reportSubImage2) {
      let carouselSubImage2 = document.getElementById('sub-image-2-carousel');
      // @ts-ignore
      if (carouselSubImage2.className.includes('active')) {
        // @ts-ignore
        carouselSubImage2.className = 'carousel-item';
        if (this.travelReport.reportSubImage1) {
          let carouselSubImage1 = document.getElementById('sub-image-1-carousel');
          // @ts-ignore
          carouselSubImage1.className = 'carousel-item active';
        }
      }
    }
    if (this.travelReport?.reportSubImage3) {
      let carouselSubImage3 = document.getElementById('sub-image-3-carousel');
      // @ts-ignore
      if (carouselSubImage3.className.includes('active')) {
        // @ts-ignore
        carouselSubImage3.className = 'carousel-item';
        if (this.travelReport.reportSubImage2) {
          let carouselSubImage2 = document.getElementById('sub-image-2-carousel');
          // @ts-ignore
          carouselSubImage2.className = 'carousel-item active';
        }
      }
    }
    if (this.travelReport?.reportSubImage4) {
      let carouselSubImage4 = document.getElementById('sub-image-4-carousel');
      // @ts-ignore
      if (carouselSubImage4.className.includes('active')) {
        // @ts-ignore
        carouselSubImage4.className = 'carousel-item';
        if (this.travelReport.reportSubImage3) {
          let carouselSubImage3 = document.getElementById('sub-image-3-carousel');
          // @ts-ignore
          carouselSubImage3.className = 'carousel-item active';
        }
      }
    }
    if (this.travelReport?.reportSubImage5) {
      let carouselSubImage5 = document.getElementById('sub-image-5-carousel');
      // @ts-ignore
      if (carouselSubImage5.className.includes('active')) {
        // @ts-ignore
        carouselSubImage5.className = 'carousel-item';
        if (this.travelReport.reportSubImage4) {
          let carouselSubImage4 = document.getElementById('sub-image-4-carousel');
          // @ts-ignore
          carouselSubImage4.className = 'carousel-item active';
        }
      }
    }
    if (this.travelReport?.reportSubImage6) {
      let carouselSubImage6 = document.getElementById('sub-image-6-carousel');
      // @ts-ignore
      if (carouselSubImage6.className.includes('active')) {
        // @ts-ignore
        carouselSubImage6.className = 'carousel-item';
        if (this.travelReport.reportSubImage5) {
          let carouselSubImage5 = document.getElementById('sub-image-5-carousel');
          // @ts-ignore
          carouselSubImage5.className = 'carousel-item active';
        }
      }
    }
  }
}
