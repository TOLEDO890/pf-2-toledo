import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unirNombres'
})
export class UnirNombresPipe implements PipeTransform {

  transform(nombre: string, apellido: string): string {
    return nombre + ' ' + apellido; 
  }

}
