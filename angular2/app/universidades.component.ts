import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'universidades',
    template:`<h3>
        <span (click) = clickEnTemplate($event)>
            Titulo
        </span>
    </h3>
    <div class="jumbotron">
        {{estudiantePipe.nombre | uppercase | slice:0:1}}. {{estudiantePipe.apellido | lowercase}}
        <br />
        {{estudiantePipe.fdn | date:'MMMM yyy'}}
        <br />
        {{estudiantePipe.promedio | number:'2.2-2'}}
        <br />
        {{estudiantePipe.prestamo | currency:'EUR':true}}
        <br />
        {{estudiantePipe | json}}
    </div>`
})
export class UniversidadesComponent {
    @Output() decano = new EventEmitter();

    estudiantePipe = {
        nombre: "Carlos",
        apellido: "Vargas",
        fdn: new Date(1995,9,2),
        promedio: 4.3723,
        prestamo: 5000
    }

    clickEnTemplate(evento):void {
        this.decano.emit({nombre: evento.target.textContent})        
    }
}