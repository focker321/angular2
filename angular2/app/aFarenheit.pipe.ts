import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'aFarenheit'})
export class AFarenheitPipe implements PipeTransform {
    transform(value: number, args: number[]) {
        if(value) {
            var temperatura = (value * 9/5) + 32;
            var decimales  = args[0];
            console.log("----->" + decimales);
            return temperatura.toFixed(decimales) + ' F';
        }
    }
}