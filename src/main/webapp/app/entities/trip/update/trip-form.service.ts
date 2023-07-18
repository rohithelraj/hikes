import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ITrip, NewTrip } from '../trip.model';

/**
 * A partial Type with required key is used as form input.
 */
type PartialWithRequiredKeyOf<T extends { id: unknown }> = Partial<Omit<T, 'id'>> & { id: T['id'] };

/**
 * Type for createFormGroup and resetForm argument.
 * It accepts ITrip for edit and NewTripFormGroupInput for create.
 */
type TripFormGroupInput = ITrip | PartialWithRequiredKeyOf<NewTrip>;

type TripFormDefaults = Pick<NewTrip, 'id'>;

type TripFormGroupContent = {
  id: FormControl<ITrip['id'] | NewTrip['id']>;
  tripName: FormControl<ITrip['tripName']>;
  mainImage: FormControl<ITrip['mainImage']>;
  mainImageContentType: FormControl<ITrip['mainImageContentType']>;
  subImage1: FormControl<ITrip['subImage1']>;
  subImage1ContentType: FormControl<ITrip['subImage1ContentType']>;
  subImage2: FormControl<ITrip['subImage2']>;
  subImage2ContentType: FormControl<ITrip['subImage2ContentType']>;
  subImage3: FormControl<ITrip['subImage3']>;
  subImage3ContentType: FormControl<ITrip['subImage3ContentType']>;
  subImage4: FormControl<ITrip['subImage4']>;
  subImage4ContentType: FormControl<ITrip['subImage4ContentType']>;
  subImage5: FormControl<ITrip['subImage5']>;
  subImage5ContentType: FormControl<ITrip['subImage5ContentType']>;
  subImage6: FormControl<ITrip['subImage6']>;
  subImage6ContentType: FormControl<ITrip['subImage6ContentType']>;
  tripDescription: FormControl<ITrip['tripDescription']>;
  combinedMap: FormControl<ITrip['combinedMap']>;
  relatedEvents: FormControl<ITrip['relatedEvents']>;
  subImage1Description: FormControl<ITrip['subImage1Description']>;
  subImage2Description: FormControl<ITrip['subImage2Description']>;
  subImage3Description: FormControl<ITrip['subImage3Description']>;
  subImage4Description: FormControl<ITrip['subImage4Description']>;
  subImage5Description: FormControl<ITrip['subImage5Description']>;
  subImage6Description: FormControl<ITrip['subImage6Description']>;
  activeSubImages: FormControl<ITrip['activeSubImages']>;
  activeRelatedEvents: FormControl<ITrip['activeRelatedEvents']>;
  transportationDetails: FormControl<ITrip['transportationDetails']>;
  costDetails: FormControl<ITrip['costDetails']>;
  accomodationDetails: FormControl<ITrip['accomodationDetails']>;
  relatedLinks: FormControl<ITrip['relatedLinks']>;
  startDate: FormControl<ITrip['startDate']>;
  endDate: FormControl<ITrip['endDate']>;
};

export type TripFormGroup = FormGroup<TripFormGroupContent>;

@Injectable({ providedIn: 'root' })
export class TripFormService {
  createTripFormGroup(trip: TripFormGroupInput = { id: null }): TripFormGroup {
    const tripRawValue = {
      ...this.getFormDefaults(),
      ...trip,
    };
    return new FormGroup<TripFormGroupContent>({
      id: new FormControl(
        { value: tripRawValue.id, disabled: true },
        {
          nonNullable: true,
          validators: [Validators.required],
        }
      ),
      tripName: new FormControl(tripRawValue.tripName, {
        validators: [Validators.required],
      }),
      mainImage: new FormControl(tripRawValue.mainImage),
      mainImageContentType: new FormControl(tripRawValue.mainImageContentType),
      subImage1: new FormControl(tripRawValue.subImage1),
      subImage1ContentType: new FormControl(tripRawValue.subImage1ContentType),
      subImage2: new FormControl(tripRawValue.subImage2),
      subImage2ContentType: new FormControl(tripRawValue.subImage2ContentType),
      subImage3: new FormControl(tripRawValue.subImage3),
      subImage3ContentType: new FormControl(tripRawValue.subImage3ContentType),
      subImage4: new FormControl(tripRawValue.subImage4),
      subImage4ContentType: new FormControl(tripRawValue.subImage4ContentType),
      subImage5: new FormControl(tripRawValue.subImage5),
      subImage5ContentType: new FormControl(tripRawValue.subImage5ContentType),
      subImage6: new FormControl(tripRawValue.subImage6),
      subImage6ContentType: new FormControl(tripRawValue.subImage6ContentType),
      tripDescription: new FormControl(tripRawValue.tripDescription),
      combinedMap: new FormControl(tripRawValue.combinedMap),
      relatedEvents: new FormControl(tripRawValue.relatedEvents),
      subImage1Description: new FormControl(tripRawValue.subImage1Description),
      subImage2Description: new FormControl(tripRawValue.subImage2Description),
      subImage3Description: new FormControl(tripRawValue.subImage3Description),
      subImage4Description: new FormControl(tripRawValue.subImage4Description),
      subImage5Description: new FormControl(tripRawValue.subImage5Description),
      subImage6Description: new FormControl(tripRawValue.subImage6Description),
      activeSubImages: new FormControl(tripRawValue.activeSubImages),
      activeRelatedEvents: new FormControl(tripRawValue.activeRelatedEvents),
      transportationDetails: new FormControl(tripRawValue.transportationDetails),
      costDetails: new FormControl(tripRawValue.costDetails),
      accomodationDetails: new FormControl(tripRawValue.accomodationDetails),
      relatedLinks: new FormControl(tripRawValue.relatedLinks),
      startDate: new FormControl(tripRawValue.startDate, {
        validators: [Validators.required],
      }),
      endDate: new FormControl(tripRawValue.endDate, {
        validators: [Validators.required],
      }),
    });
  }

  getTrip(form: TripFormGroup): ITrip | NewTrip {
    return form.getRawValue() as ITrip | NewTrip;
  }

  resetForm(form: TripFormGroup, trip: TripFormGroupInput): void {
    const tripRawValue = { ...this.getFormDefaults(), ...trip };
    form.reset(
      {
        ...tripRawValue,
        id: { value: tripRawValue.id, disabled: true },
      } as any /* cast to workaround https://github.com/angular/angular/issues/46458 */
    );
  }

  private getFormDefaults(): TripFormDefaults {
    return {
      id: null,
    };
  }
}
