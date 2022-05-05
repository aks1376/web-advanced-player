import { SecondsToHumanPipe } from "./seconds-to-human.pipe";


describe('SecondsToHumanPipe', () => {
  const pipe = new SecondsToHumanPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should transform "NaN" to "00:00:00"', () => {
    expect(pipe.transform("NaN")).toBe('00:00:00');
  });

  it('should transform "" to "00:00:00"', () => {
    expect(pipe.transform('')).toBe('00:00:00');
  });

  it('should transform "5423" to "01:30:23"', () => {
    expect(pipe.transform(5423)).toBe('01:30:23');
  });

  it('should transform "3780" to "01:03:00"', () => {
    expect(pipe.transform(3780)).toBe('01:03:00');
  });

  it('should transform "16249" to "04:30:49"', () => {
    expect(pipe.transform(16249)).toBe('04:30:49');
  });
});
