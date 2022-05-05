import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'secondsToHuman'
})
export class SecondsToHumanPipe implements PipeTransform {

  transform(value: number | string, ...args: unknown[]): string {
    if (!value) {
      return '00:00:00'
    }
    if (value === 'NaN') {
      return '00:00:00'
    }

    return this.formatSecondsToString(+value);
  }

  /**
  * convert seconds to hh:mm:ss format
  * @param seconds seconds
  */
  formatSecondsToString(seconds: number) {
    const hours = Math.floor(seconds / 3600);
    seconds = seconds - (hours * 3600);
    const minutes = Math.floor(seconds / 60);
    seconds = Math.floor(seconds - (minutes * 60));

    const hoursStr = String(hours).length === 1 ? `0${hours}` : `${hours}`;
    const minutesStr = String(minutes).length === 1 ? `0${minutes}` : `${minutes}`;
    const secondStr = String(seconds).length === 1 ? `0${seconds}` : `${seconds}`;

    return `${hoursStr}:${minutesStr}:${secondStr}`;
  }

}