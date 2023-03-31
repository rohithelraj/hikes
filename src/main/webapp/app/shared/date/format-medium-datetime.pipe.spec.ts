import dayjs from 'dayjs/esm';

import { FormatMediumDatetimePipe } from './format-medium-datetime.pipe';

describe('FormatMediumDatePipe', () => {
  const formatMediumDatetimePipe = new FormatMediumDatetimePipe();

  it('should return an empty string when receive undefined', () => {
    expect(formatMediumDatetimePipe.transform(undefined)).toBe('');
  });

  it('should return an empty string when receive null', () => {
    expect(formatMediumDatetimePipe.transform(null)).toBe('');
  });
});
