import dayjs from 'dayjs/esm';
import { ITrip } from 'app/entities/trip/trip.model';

export interface ITravelReport {
  id: number;
  reportName?: string | null;
  reportDate?: dayjs.Dayjs | null;
  reportEventIds?: string | null;
  reportDescription?: string | null;
  reportMainImage?: string | null;
  reportMainImageContentType?: string | null;
  reportSubImage1?: string | null;
  reportSubImage1ContentType?: string | null;
  reportSubImageName?: string | null;
  reportSubImage1Description?: string | null;
  reportSubImage2?: string | null;
  reportSubImage2ContentType?: string | null;
  reportSubImage2Name?: string | null;
  reportSubImage2Description?: string | null;
  reportSubImage3?: string | null;
  reportSubImage3ContentType?: string | null;
  reportSubImage3Name?: string | null;
  reportSubImage3Description?: string | null;
  reportSubImage4?: string | null;
  reportSubImage4ContentType?: string | null;
  reportSubImage4Name?: string | null;
  reportSubImage4Description?: string | null;
  reportSubImage5?: string | null;
  reportSubImage5ContentType?: string | null;
  reportSubImage5Name?: string | null;
  reportSubImage5Description?: string | null;
  reportSubImage6?: string | null;
  reportSubImage6ContentType?: string | null;
  reportSubImage6Name?: string | null;
  reportSubImage6Description?: string | null;
  trip?: Pick<ITrip, 'id'> | null;
}

export type NewTravelReport = Omit<ITravelReport, 'id'> & { id: null };
