import dayjs from 'dayjs/esm';

export interface ITrip {
  id: number;
  tripName?: string | null;
  mainImage?: string | null;
  mainImageContentType?: string | null;
  subImage1?: string | null;
  subImage1ContentType?: string | null;
  subImage2?: string | null;
  subImage2ContentType?: string | null;
  subImage3?: string | null;
  subImage3ContentType?: string | null;
  subImage4?: string | null;
  subImage4ContentType?: string | null;
  subImage5?: string | null;
  subImage5ContentType?: string | null;
  subImage6?: string | null;
  subImage6ContentType?: string | null;
  tripDescription?: string | null;
  combinedMap?: string | null;
  relatedEvents?: string | null;
  subImage1Description?: string | null;
  subImage2Description?: string | null;
  subImage3Description?: string | null;
  subImage4Description?: string | null;
  subImage5Description?: string | null;
  subImage6Description?: string | null;
  activeSubImages?: number | null;
  activeRelatedEvents?: number | null;
  transportationDetails?: string | null;
  costDetails?: string | null;
  accomodationDetails?: string | null;
  relatedLinks?: string | null;
  startDate?: dayjs.Dayjs | null;
  endDate?: dayjs.Dayjs | null;
}

export type NewTrip = Omit<ITrip, 'id'> & { id: null };
