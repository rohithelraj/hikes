import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ITravelReport, NewTravelReport } from '../travel-report.model';

/**
 * A partial Type with required key is used as form input.
 */
type PartialWithRequiredKeyOf<T extends { id: unknown }> = Partial<Omit<T, 'id'>> & { id: T['id'] };

/**
 * Type for createFormGroup and resetForm argument.
 * It accepts ITravelReport for edit and NewTravelReportFormGroupInput for create.
 */
type TravelReportFormGroupInput = ITravelReport | PartialWithRequiredKeyOf<NewTravelReport>;

type TravelReportFormDefaults = Pick<NewTravelReport, 'id'>;

type TravelReportFormGroupContent = {
  id: FormControl<ITravelReport['id'] | NewTravelReport['id']>;
  reportName: FormControl<ITravelReport['reportName']>;
  reportDate: FormControl<ITravelReport['reportDate']>;
  reportEventIds: FormControl<ITravelReport['reportEventIds']>;
  reportDescription: FormControl<ITravelReport['reportDescription']>;
  reportMainImage: FormControl<ITravelReport['reportMainImage']>;
  reportMainImageContentType: FormControl<ITravelReport['reportMainImageContentType']>;
  reportSubImage1: FormControl<ITravelReport['reportSubImage1']>;
  reportSubImage1ContentType: FormControl<ITravelReport['reportSubImage1ContentType']>;
  reportSubImageName: FormControl<ITravelReport['reportSubImageName']>;
  reportSubImage1Description: FormControl<ITravelReport['reportSubImage1Description']>;
  reportSubImage2: FormControl<ITravelReport['reportSubImage2']>;
  reportSubImage2ContentType: FormControl<ITravelReport['reportSubImage2ContentType']>;
  reportSubImage2Name: FormControl<ITravelReport['reportSubImage2Name']>;
  reportSubImage2Description: FormControl<ITravelReport['reportSubImage2Description']>;
  reportSubImage3: FormControl<ITravelReport['reportSubImage3']>;
  reportSubImage3ContentType: FormControl<ITravelReport['reportSubImage3ContentType']>;
  reportSubImage3Name: FormControl<ITravelReport['reportSubImage3Name']>;
  reportSubImage3Description: FormControl<ITravelReport['reportSubImage3Description']>;
  reportSubImage4: FormControl<ITravelReport['reportSubImage4']>;
  reportSubImage4ContentType: FormControl<ITravelReport['reportSubImage4ContentType']>;
  reportSubImage4Name: FormControl<ITravelReport['reportSubImage4Name']>;
  reportSubImage4Description: FormControl<ITravelReport['reportSubImage4Description']>;
  reportSubImage5: FormControl<ITravelReport['reportSubImage5']>;
  reportSubImage5ContentType: FormControl<ITravelReport['reportSubImage5ContentType']>;
  reportSubImage5Name: FormControl<ITravelReport['reportSubImage5Name']>;
  reportSubImage5Description: FormControl<ITravelReport['reportSubImage5Description']>;
  reportSubImage6: FormControl<ITravelReport['reportSubImage6']>;
  reportSubImage6ContentType: FormControl<ITravelReport['reportSubImage6ContentType']>;
  reportSubImage6Name: FormControl<ITravelReport['reportSubImage6Name']>;
  reportSubImage6Description: FormControl<ITravelReport['reportSubImage6Description']>;
  trip: FormControl<ITravelReport['trip']>;
};

export type TravelReportFormGroup = FormGroup<TravelReportFormGroupContent>;

@Injectable({ providedIn: 'root' })
export class TravelReportFormService {
  createTravelReportFormGroup(travelReport: TravelReportFormGroupInput = { id: null }): TravelReportFormGroup {
    const travelReportRawValue = {
      ...this.getFormDefaults(),
      ...travelReport,
    };
    return new FormGroup<TravelReportFormGroupContent>({
      id: new FormControl(
        { value: travelReportRawValue.id, disabled: true },
        {
          nonNullable: true,
          validators: [Validators.required],
        }
      ),
      reportName: new FormControl(travelReportRawValue.reportName, {
        validators: [Validators.required],
      }),
      reportDate: new FormControl(travelReportRawValue.reportDate, {
        validators: [Validators.required],
      }),
      reportEventIds: new FormControl(travelReportRawValue.reportEventIds),
      reportDescription: new FormControl(travelReportRawValue.reportDescription),
      reportMainImage: new FormControl(travelReportRawValue.reportMainImage),
      reportMainImageContentType: new FormControl(travelReportRawValue.reportMainImageContentType),
      reportSubImage1: new FormControl(travelReportRawValue.reportSubImage1),
      reportSubImage1ContentType: new FormControl(travelReportRawValue.reportSubImage1ContentType),
      reportSubImageName: new FormControl(travelReportRawValue.reportSubImageName),
      reportSubImage1Description: new FormControl(travelReportRawValue.reportSubImage1Description),
      reportSubImage2: new FormControl(travelReportRawValue.reportSubImage2),
      reportSubImage2ContentType: new FormControl(travelReportRawValue.reportSubImage2ContentType),
      reportSubImage2Name: new FormControl(travelReportRawValue.reportSubImage2Name),
      reportSubImage2Description: new FormControl(travelReportRawValue.reportSubImage2Description),
      reportSubImage3: new FormControl(travelReportRawValue.reportSubImage3),
      reportSubImage3ContentType: new FormControl(travelReportRawValue.reportSubImage3ContentType),
      reportSubImage3Name: new FormControl(travelReportRawValue.reportSubImage3Name),
      reportSubImage3Description: new FormControl(travelReportRawValue.reportSubImage3Description),
      reportSubImage4: new FormControl(travelReportRawValue.reportSubImage4),
      reportSubImage4ContentType: new FormControl(travelReportRawValue.reportSubImage4ContentType),
      reportSubImage4Name: new FormControl(travelReportRawValue.reportSubImage4Name),
      reportSubImage4Description: new FormControl(travelReportRawValue.reportSubImage4Description),
      reportSubImage5: new FormControl(travelReportRawValue.reportSubImage5),
      reportSubImage5ContentType: new FormControl(travelReportRawValue.reportSubImage5ContentType),
      reportSubImage5Name: new FormControl(travelReportRawValue.reportSubImage5Name),
      reportSubImage5Description: new FormControl(travelReportRawValue.reportSubImage5Description),
      reportSubImage6: new FormControl(travelReportRawValue.reportSubImage6),
      reportSubImage6ContentType: new FormControl(travelReportRawValue.reportSubImage6ContentType),
      reportSubImage6Name: new FormControl(travelReportRawValue.reportSubImage6Name),
      reportSubImage6Description: new FormControl(travelReportRawValue.reportSubImage6Description),
      trip: new FormControl(travelReportRawValue.trip),
    });
  }

  getTravelReport(form: TravelReportFormGroup): ITravelReport | NewTravelReport {
    return form.getRawValue() as ITravelReport | NewTravelReport;
  }

  resetForm(form: TravelReportFormGroup, travelReport: TravelReportFormGroupInput): void {
    const travelReportRawValue = { ...this.getFormDefaults(), ...travelReport };
    form.reset(
      {
        ...travelReportRawValue,
        id: { value: travelReportRawValue.id, disabled: true },
      } as any /* cast to workaround https://github.com/angular/angular/issues/46458 */
    );
  }

  private getFormDefaults(): TravelReportFormDefaults {
    return {
      id: null,
    };
  }
}
