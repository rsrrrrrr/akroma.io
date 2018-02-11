import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unixTimestampToDate',
})
export class UnixTimestampToDatePipe implements PipeTransform {
  transform(value: number): Date {
    return new Date(value * 1000);
  }
}
