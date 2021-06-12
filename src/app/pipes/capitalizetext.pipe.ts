import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizetext'
})
export class CapitalizetextPipe implements PipeTransform {

  transform(inputText: string): string {
    // Traditional way
    // let words = inputText.trim().split(' ')
    // for (let i = 0; i < words.length; ++i) {
    //   words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
    // }
    // let outputText = words.join(' ');
    // return outputText;

    // FUNCTIONAL WAY aka THE SMART WAY
    return inputText
            .trim()
            .split(' ')
            .map(w => w[0].toUpperCase() + w.slice(1).toLowerCase())
            .join(' ');

  }

}
