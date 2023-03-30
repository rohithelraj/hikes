import dayjs from 'dayjs/esm';

export interface IEventPlan {
  id: number;
  eventDate?: dayjs.Dayjs | null;
  eventStartTime?: dayjs.Dayjs | null;
  eventEndTime?: dayjs.Dayjs | null;
  komootMap?: string | null;
  eventNAme?: string | null;
  description?: string | null;
  travelSchedule?: string | null;
  hikeMainImage?: string | null;
  hikeMainImageContentType?: string | null;
  hikeHighlightImage1?: string | null;
  hikeHighlightImage1ContentType?: string | null;
  hikeHighlightImage1Description?: string | null;
  hikeHighlightImage2?: string | null;
  hikeHighlightImage2ContentType?: string | null;
  hikeHighlightImage2Description?: string | null;
}

export type NewEventPlan = Omit<IEventPlan, 'id'> & { id: null };
