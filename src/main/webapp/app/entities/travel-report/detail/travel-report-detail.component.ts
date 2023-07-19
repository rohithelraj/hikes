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
}
