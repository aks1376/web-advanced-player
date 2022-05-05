import { BytesToHumanPipe } from "./bytes-to-human.pipe";


describe('SecondsToHumanPipe', () => {
  const pipe = new BytesToHumanPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should transform "15728640" to "15 MB"', () => {
    expect(pipe.transform(15728640)).toBe('15 MB');
  });

  it('should transform "16252928" to "15.5 MB"', () => {
    expect(pipe.transform(16252928)).toBe('15.5 MB');
  });

  it('should transform "1911260446" to "1.78 GB"', () => {
    expect(pipe.transform(1911260446)).toBe('1.78 GB');
  });
});