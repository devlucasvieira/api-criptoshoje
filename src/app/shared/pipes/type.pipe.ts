import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'type'
})
export class TypePipe implements PipeTransform {

  transform(value: string): string {

    switch (value) {
      case 'Criptomoeda' : return 'currency_bitcoin';
      case 'Token' : return 'token';
    }

    return 'code';
  }

}
