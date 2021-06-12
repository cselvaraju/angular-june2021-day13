import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncatetext'
})
export class TruncatetextPipe implements PipeTransform {

  transform(originalText: string, numOfChars: number): string {
    return originalText.slice(0, originalText.length - numOfChars);
  }

}
