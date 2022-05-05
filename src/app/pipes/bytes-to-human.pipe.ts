import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bytesToHuman'
})
export class BytesToHumanPipe implements PipeTransform {

  transform(value: number | undefined, ...args: unknown[]): string {
    if (!value || value === 0) {
      return '0';
    }
    const k = 1024;
    const dm = 2 < 0 ? 0 : 2;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(value) / Math.log(k));

    return parseFloat((value / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }

}
