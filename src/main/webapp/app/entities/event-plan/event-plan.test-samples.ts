import dayjs from 'dayjs/esm';

import { IEventPlan, NewEventPlan } from './event-plan.model';

export const sampleWithRequiredData: IEventPlan = {
  id: 18211,
  eventDate: dayjs('2023-03-30'),
  komootMap: 'Mall Malta',
  eventNAme: 'Guyana',
};

export const sampleWithPartialData: IEventPlan = {
  id: 97242,
  eventDate: dayjs('2023-03-29'),
  eventStartTime: dayjs('2023-03-29T12:35'),
  komootMap: 'input',
  eventNAme: 'Buckinghamshire Awesome scalable',
  description: 'Row Frozen',
  travelSchedule: 'Shirt streamline Lead',
  hikeMainImage: '../fake-data/blob/hipster.png',
  hikeMainImageContentType: 'unknown',
  hikeHighlightImage1: '../fake-data/blob/hipster.png',
  hikeHighlightImage1ContentType: 'unknown',
};

export const sampleWithFullData: IEventPlan = {
  id: 74298,
  eventDate: dayjs('2023-03-30'),
  eventStartTime: dayjs('2023-03-29T16:34'),
  eventEndTime: dayjs('2023-03-30T05:48'),
  komootMap: 'benchmark SAS Specialist',
  eventNAme: 'streamline orange driver',
  description: 'dedicated Movies mint',
  travelSchedule: 'redundant Chief sensor',
  hikeMainImage: '../fake-data/blob/hipster.png',
  hikeMainImageContentType: 'unknown',
  hikeHighlightImage1: '../fake-data/blob/hipster.png',
  hikeHighlightImage1ContentType: 'unknown',
  hikeHighlightImage1Description: 'Michigan Pre-emptive Generic',
  hikeHighlightImage2: '../fake-data/blob/hipster.png',
  hikeHighlightImage2ContentType: 'unknown',
  hikeHighlightImage2Description: 'Canada protocol',
};

export const sampleWithNewData: NewEventPlan = {
  eventDate: dayjs('2023-03-30'),
  komootMap: 'Sausages Ball Shirt',
  eventNAme: 'Manager',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
