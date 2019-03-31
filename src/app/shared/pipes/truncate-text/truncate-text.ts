import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})

export class TruncatePipe {
  transform(value: string, length: number): string {    
    const tripleDot = "...";

    if (typeof value === "undefined") {
      return value;
    }
    if (value.length <= length) {
      return value;
    }
    else {
      return value.slice(0, length) + tripleDot;
    }
  }
}