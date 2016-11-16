import { Component } from '@angular/core';
import { EstudiantesComponent } from './estudiantes.component';
import { UniversidadesComponent } from './universidades.component';

import { PipesComponent } from './pipes.component';

@Component({
  selector: 'my-app',
  template: `<h1>Aprende Angular 2 Fácilmente!!!</h1>
  <estudiantes [mi-universidad] = "laUniversidad"
  (seleccionado) = "mostrarEstudiante($event)"></estudiantes>
  <universidades (decano) = mostrarEstudiante($event) ></universidades>
  <pipes></pipes>
  `,
  directives: [EstudiantesComponent, UniversidadesComponent, PipesComponent]
})
export class AppComponent { 
  laUniversidad = "universidad nacional";

  mostrarEstudiante(evento): void {
    console.log(evento.nombre);
  }
}