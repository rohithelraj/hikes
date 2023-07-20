import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import dayjs from 'dayjs/esm';
import { DATE_TIME_FORMAT } from 'app/config/input.constants';
import { IEventPlan, NewEventPlan } from '../event-plan.model';

/**
 * A partial Type with required key is used as form input.
 */
type PartialWithRequiredKeyOf<T extends { id: unknown }> = Partial<Omit<T, 'id'>> & { id: T['id'] };

/**
 * Type for createFormGroup and resetForm argument.
 * It accepts IEventPlan for edit and NewEventPlanFormGroupInput for create.
 */
type EventPlanFormGroupInput = IEventPlan | PartialWithRequiredKeyOf<NewEventPlan>;

/**
 * Type that converts some properties for forms.
 */
type FormValueOf<T extends IEventPlan | NewEventPlan> = Omit<T, 'eventStartTime' | 'eventEndTime'> & {
  eventStartTime?: string | null;
  eventEndTime?: string | null;
};

type EventPlanFormRawValue = FormValueOf<IEventPlan>;

type NewEventPlanFormRawValue = FormValueOf<NewEventPlan>;

type EventPlanFormDefaults = Pick<NewEventPlan, 'id' | 'eventStartTime' | 'eventEndTime'>;

type EventPlanFormGroupContent = {
  id: FormControl<EventPlanFormRawValue['id'] | NewEventPlan['id']>;
  eventDate: FormControl<EventPlanFormRawValue['eventDate']>;
  eventStartTime: FormControl<EventPlanFormRawValue['eventStartTime']>;
  eventEndTime: FormControl<EventPlanFormRawValue['eventEndTime']>;
  komootMap: FormControl<EventPlanFormRawValue['komootMap']>;
  eventNAme: FormControl<EventPlanFormRawValue['eventNAme']>;
  hikeMainImage: FormControl<EventPlanFormRawValue['hikeMainImage']>;
  hikeMainImageContentType: FormControl<EventPlanFormRawValue['hikeMainImageContentType']>;
  hikeHighlightImage1: FormControl<EventPlanFormRawValue['hikeHighlightImage1']>;
  hikeHighlightImage1ContentType: FormControl<EventPlanFormRawValue['hikeHighlightImage1ContentType']>;
  hikeHighlightImage2: FormControl<EventPlanFormRawValue['hikeHighlightImage2']>;
  hikeHighlightImage2ContentType: FormControl<EventPlanFormRawValue['hikeHighlightImage2ContentType']>;
  eventDescription: FormControl<EventPlanFormRawValue['eventDescription']>;
  eventTravelSchedule: FormControl<EventPlanFormRawValue['eventTravelSchedule']>;
  hikingHighlightImage1Description: FormControl<EventPlanFormRawValue['hikingHighlightImage1Description']>;
  hikingHighlightImage2Description: FormControl<EventPlanFormRawValue['hikingHighlightImage2Description']>;
};

export type EventPlanFormGroup = FormGroup<EventPlanFormGroupContent>;

@Injectable({ providedIn: 'root' })
export class EventPlanFormService {
  createEventPlanFormGroup(eventPlan: EventPlanFormGroupInput = { id: null }): EventPlanFormGroup {
    const eventPlanRawValue = this.convertEventPlanToEventPlanRawValue({
      ...this.getFormDefaults(),
      ...eventPlan,
    });
    return new FormGroup<EventPlanFormGroupContent>({
      id: new FormControl(
        { value: eventPlanRawValue.id, disabled: true },
        {
          nonNullable: true,
          validators: [Validators.required],
        }
      ),
      eventDate: new FormControl(eventPlanRawValue.eventDate, {
        validators: [Validators.required],
      }),
      eventStartTime: new FormControl(eventPlanRawValue.eventStartTime),
      eventEndTime: new FormControl(eventPlanRawValue.eventEndTime),
      komootMap: new FormControl(eventPlanRawValue.komootMap, {
        validators: [Validators.required],
      }),
      eventNAme: new FormControl(eventPlanRawValue.eventNAme, {
        validators: [Validators.required],
      }),
      hikeMainImage: new FormControl(eventPlanRawValue.hikeMainImage),
      hikeMainImageContentType: new FormControl(eventPlanRawValue.hikeMainImageContentType),
      hikeHighlightImage1: new FormControl(eventPlanRawValue.hikeHighlightImage1),
      hikeHighlightImage1ContentType: new FormControl(eventPlanRawValue.hikeHighlightImage1ContentType),
      hikeHighlightImage2: new FormControl(eventPlanRawValue.hikeHighlightImage2),
      hikeHighlightImage2ContentType: new FormControl(eventPlanRawValue.hikeHighlightImage2ContentType),
      eventDescription: new FormControl(eventPlanRawValue.eventDescription),
      eventTravelSchedule: new FormControl(eventPlanRawValue.eventTravelSchedule),
      hikingHighlightImage1Description: new FormControl(eventPlanRawValue.hikingHighlightImage1Description),
      hikingHighlightImage2Description: new FormControl(eventPlanRawValue.hikingHighlightImage2Description),
    });
  }

  getEventPlan(form: EventPlanFormGroup): IEventPlan | NewEventPlan {
    return this.convertEventPlanRawValueToEventPlan(form.getRawValue() as EventPlanFormRawValue | NewEventPlanFormRawValue);
  }

  resetForm(form: EventPlanFormGroup, eventPlan: EventPlanFormGroupInput): void {
    const eventPlanRawValue = this.convertEventPlanToEventPlanRawValue({ ...this.getFormDefaults(), ...eventPlan });
    form.reset(
      {
        ...eventPlanRawValue,
        id: { value: eventPlanRawValue.id, disabled: true },
      } as any /* cast to workaround https://github.com/angular/angular/issues/46458 */
    );
  }

  private getFormDefaults(): EventPlanFormDefaults {
    const currentTime = dayjs();

    return {
      id: null,
      eventStartTime: currentTime,
      eventEndTime: currentTime,
    };
  }

  private convertEventPlanRawValueToEventPlan(rawEventPlan: EventPlanFormRawValue | NewEventPlanFormRawValue): IEventPlan | NewEventPlan {
    return {
      ...rawEventPlan,
      eventStartTime: dayjs(rawEventPlan.eventStartTime, DATE_TIME_FORMAT),
      eventEndTime: dayjs(rawEventPlan.eventEndTime, DATE_TIME_FORMAT),
    };
  }

  private convertEventPlanToEventPlanRawValue(
    eventPlan: IEventPlan | (Partial<NewEventPlan> & EventPlanFormDefaults)
  ): EventPlanFormRawValue | PartialWithRequiredKeyOf<NewEventPlanFormRawValue> {
    return {
      ...eventPlan,
      eventStartTime: eventPlan.eventStartTime ? eventPlan.eventStartTime.format(DATE_TIME_FORMAT) : undefined,
      eventEndTime: eventPlan.eventEndTime ? eventPlan.eventEndTime.format(DATE_TIME_FORMAT) : undefined,
    };
  }
}
