import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reversetext'
})
export class ReversetextPipe implements PipeTransform {

  transform(originalText: string): string {
    let reversedText = '';
    reversedText = originalText
                    .split('')
                    .reverse()
                    .join('');
    return reversedText;
  }

}
