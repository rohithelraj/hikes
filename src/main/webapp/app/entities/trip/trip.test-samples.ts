import dayjs from 'dayjs/esm';

import { ITrip, NewTrip } from './trip.model';

export const sampleWithRequiredData: ITrip = {
  id: 75049,
  tripName: 'THX Orchestrator',
  startDate: dayjs('2023-07-18'),
  endDate: dayjs('2023-07-18'),
};

export const sampleWithPartialData: ITrip = {
  id: 30005,
  tripName: 'extend Ball',
  mainImage: '../fake-data/blob/hipster.png',
  mainImageContentType: 'unknown',
  subImage2: '../fake-data/blob/hipster.png',
  subImage2ContentType: 'unknown',
  subImage3: '../fake-data/blob/hipster.png',
  subImage3ContentType: 'unknown',
  tripDescription: '../fake-data/blob/hipster.txt',
  subImage2Description: '../fake-data/blob/hipster.txt',
  activeSubImages: 58860,
  transportationDetails: '../fake-data/blob/hipster.txt',
  costDetails: '../fake-data/blob/hipster.txt',
  accomodationDetails: '../fake-data/blob/hipster.txt',
  startDate: dayjs('2023-07-17'),
  endDate: dayjs('2023-07-17'),
};

export const sampleWithFullData: ITrip = {
  id: 3685,
  tripName: 'Group standardization transmitter',
  mainImage: '../fake-data/blob/hipster.png',
  mainImageContentType: 'unknown',
  subImage1: '../fake-data/blob/hipster.png',
  subImage1ContentType: 'unknown',
  subImage2: '../fake-data/blob/hipster.png',
  subImage2ContentType: 'unknown',
  subImage3: '../fake-data/blob/hipster.png',
  subImage3ContentType: 'unknown',
  subImage4: '../fake-data/blob/hipster.png',
  subImage4ContentType: 'unknown',
  subImage5: '../fake-data/blob/hipster.png',
  subImage5ContentType: 'unknown',
  subImage6: '../fake-data/blob/hipster.png',
  subImage6ContentType: 'unknown',
  tripDescription: '../fake-data/blob/hipster.txt',
  combinedMap: 'wireless',
  relatedEvents: 'input',
  subImage1Description: '../fake-data/blob/hipster.txt',
  subImage2Description: '../fake-data/blob/hipster.txt',
  subImage3Description: '../fake-data/blob/hipster.txt',
  subImage4Description: '../fake-data/blob/hipster.txt',
  subImage5Description: '../fake-data/blob/hipster.txt',
  subImage6Description: '../fake-data/blob/hipster.txt',
  activeSubImages: 81247,
  activeRelatedEvents: 64254,
  transportationDetails: '../fake-data/blob/hipster.txt',
  costDetails: '../fake-data/blob/hipster.txt',
  accomodationDetails: '../fake-data/blob/hipster.txt',
  relatedLinks: '../fake-data/blob/hipster.txt',
  startDate: dayjs('2023-07-17'),
  endDate: dayjs('2023-07-18'),
};

export const sampleWithNewData: NewTrip = {
  tripName: 'black SSL',
  startDate: dayjs('2023-07-18'),
  endDate: dayjs('2023-07-18'),
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
