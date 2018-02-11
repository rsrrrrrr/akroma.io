import { UnixTimestampToDatePipe } from './unix-timestamp-to-date.pipe';

describe('UnixTimestampToDatePipe', () => {
  let pipe: UnixTimestampToDatePipe;

  beforeEach(() => {
    pipe = new UnixTimestampToDatePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  describe('.transform', () => {
    it('should convert a unix timestamp into a Date', () => {
      const actualDate = pipe.transform(1517935205);
      const utcTime = Date.UTC(2018, 1, 6, 16, 40, 5);

      expect(actualDate).toEqual(new Date(utcTime));
    });
  });
});
