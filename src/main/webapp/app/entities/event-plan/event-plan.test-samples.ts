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
  hikeMainImage: '../fake-data/blob/hipster.png',
  hikeMainImageContentType: 'unknown',
  hikeHighlightImage1: '../fake-data/blob/hipster.png',
  hikeHighlightImage1ContentType: 'unknown',
  hikeHighlightImage2: '../fake-data/blob/hipster.png',
  hikeHighlightImage2ContentType: 'unknown',
  eventDescription: '../fake-data/blob/hipster.txt',
};

export const sampleWithFullData: IEventPlan = {
  id: 60152,
  eventDate: dayjs('2023-03-30'),
  eventStartTime: dayjs('2023-03-29T18:53'),
  eventEndTime: dayjs('2023-03-29T17:22'),
  komootMap: 'Internal',
  eventNAme: 'engage',
  hikeMainImage: '../fake-data/blob/hipster.png',
  hikeMainImageContentType: 'unknown',
  hikeHighlightImage1: '../fake-data/blob/hipster.png',
  hikeHighlightImage1ContentType: 'unknown',
  hikeHighlightImage2: '../fake-data/blob/hipster.png',
  hikeHighlightImage2ContentType: 'unknown',
  eventDescription: '../fake-data/blob/hipster.txt',
  eventTravelSchedule: '../fake-data/blob/hipster.txt',
  hikingHighlightImage1Description: '../fake-data/blob/hipster.txt',
  hikingHighlightImage2Description: '../fake-data/blob/hipster.txt',
};

export const sampleWithNewData: NewEventPlan = {
  eventDate: dayjs('2023-03-30'),
  komootMap: 'Lead',
  eventNAme: 'Refined Markets Switzerland',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
