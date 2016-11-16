import { Component } from '@angular/core'
import {AFarenheitPipe} from './aFarenheit.pipe'
@Component({
    selector: 'pipes',
    template: `
        <div class="jumbotron">
        La temperatura actual es: 
        {{ temperatura | aFarenheit:2 }}
        </div>
    `,
    pipes: [AFarenheitPipe]
})
export class PipesComponent {
    temperatura: number = 22;
}