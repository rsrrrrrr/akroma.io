import { Pipe, PipeTransform } from '@angular/core';
import { toAscii } from 'ethjs-util';

@Pipe({
  name: 'hexToAscii',
})
export class HexToAsciiPipe implements PipeTransform {
  transform(value: string): string {
    return toAscii(value);
  }
}
