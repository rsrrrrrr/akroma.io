import { Pipe, PipeTransform } from '@angular/core';
import * as web3utils from 'web3-utils';

@Pipe({
  name: 'hexToAscii',
})
export class HexToAsciiPipe implements PipeTransform {
  transform(value: string): string {
    return web3utils.toAscii(value);
  }
}
