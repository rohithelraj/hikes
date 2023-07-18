import dayjs from 'dayjs/esm';

import { ITravelReport, NewTravelReport } from './travel-report.model';

export const sampleWithRequiredData: ITravelReport = {
  id: 30546,
  reportName: 'Health 1080p blue',
  reportDate: dayjs('2023-07-18'),
};

export const sampleWithPartialData: ITravelReport = {
  id: 46762,
  reportName: 'uniform matrix Fresh',
  reportDate: dayjs('2023-07-18'),
  reportSubImage1: '../fake-data/blob/hipster.png',
  reportSubImage1ContentType: 'unknown',
  reportSubImage1Description: '../fake-data/blob/hipster.txt',
  reportSubImage2: '../fake-data/blob/hipster.png',
  reportSubImage2ContentType: 'unknown',
  reportSubImage2Name: 'sticky overriding Account',
  reportSubImage2Description: '../fake-data/blob/hipster.txt',
  reportSubImage3Description: '../fake-data/blob/hipster.txt',
  reportSubImage4: '../fake-data/blob/hipster.png',
  reportSubImage4ContentType: 'unknown',
  reportSubImage4Name: 'support',
  reportSubImage6: '../fake-data/blob/hipster.png',
  reportSubImage6ContentType: 'unknown',
  reportSubImage6Description: '../fake-data/blob/hipster.txt',
};

export const sampleWithFullData: ITravelReport = {
  id: 92656,
  reportName: 'Architect auxiliary Oval',
  reportDate: dayjs('2023-07-18'),
  reportEventIds: 'Fresh bypass',
  reportDescription: '../fake-data/blob/hipster.txt',
  reportMainImage: '../fake-data/blob/hipster.png',
  reportMainImageContentType: 'unknown',
  reportSubImage1: '../fake-data/blob/hipster.png',
  reportSubImage1ContentType: 'unknown',
  reportSubImageName: 'Dynamic program',
  reportSubImage1Description: '../fake-data/blob/hipster.txt',
  reportSubImage2: '../fake-data/blob/hipster.png',
  reportSubImage2ContentType: 'unknown',
  reportSubImage2Name: 'Dakota Kentucky Branding',
  reportSubImage2Description: '../fake-data/blob/hipster.txt',
  reportSubImage3: '../fake-data/blob/hipster.png',
  reportSubImage3ContentType: 'unknown',
  reportSubImage3Name: 'payment plug-and-play',
  reportSubImage3Description: '../fake-data/blob/hipster.txt',
  reportSubImage4: '../fake-data/blob/hipster.png',
  reportSubImage4ContentType: 'unknown',
  reportSubImage4Name: 'Planner',
  reportSubImage4Description: '../fake-data/blob/hipster.txt',
  reportSubImage5: '../fake-data/blob/hipster.png',
  reportSubImage5ContentType: 'unknown',
  reportSubImage5Name: 'deposit reintermediate',
  reportSubImage5Description: '../fake-data/blob/hipster.txt',
  reportSubImage6: '../fake-data/blob/hipster.png',
  reportSubImage6ContentType: 'unknown',
  reportSubImage6Name: 'black Plastic',
  reportSubImage6Description: '../fake-data/blob/hipster.txt',
};

export const sampleWithNewData: NewTravelReport = {
  reportName: 'Small',
  reportDate: dayjs('2023-07-18'),
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
