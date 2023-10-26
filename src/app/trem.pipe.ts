import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trem'
})
export class TremPipe implements PipeTransform {

  transform(value: string, numberOfChar: number): string {
    return value.split(" ").slice(0,numberOfChar).join(" ")
  }

}
