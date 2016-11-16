import { Component, Input, Output, EventEmitter } from '@angular/core'
@Component({
    selector: 'estudiantes',
    templateUrl: "app/templates/estudiante.template.html"

})
export class EstudiantesComponent {
    // @Input() universidad: string;
    @Input("mi-universidad") universidad: string;
    @Output() seleccionado = new EventEmitter();
    titulo = "Lista de estudiantes!!!";
    estudiantes = ["Santiago Apaza", "Rosmery Meza"];
    imgUrl = "http://lorempicsum.com/futurama/255/200/2";
    redondeadas = false;
    padding = true;

    alerta() {
        console.log("Hola Mundo");
        alert("Esta es una alerta");
    }

    listaDeEstudiantes(): Array<string> {
        if(this.universidad == "universidad nacional") {
            return ["Andres Arias", "Carlos Castro", "Ricardo Ramirez"];
        } else {
            return ["Ricardo Macedo", "Nataly Flores"]
        }

    }

    clickEnEstudiante(evento): void {
        this.seleccionado.emit({nombre: evento.target.textContent});
    }
}