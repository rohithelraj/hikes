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
}
