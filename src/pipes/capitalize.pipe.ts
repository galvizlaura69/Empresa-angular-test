import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(text: string) {
    const lower = text.toLocaleLowerCase();
    return text.charAt(0).toUpperCase() + lower.slice(1);
  }
}
