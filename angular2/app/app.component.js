"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var estudiantes_component_1 = require('./estudiantes.component');
var universidades_component_1 = require('./universidades.component');
var pipes_component_1 = require('./pipes.component');
var AppComponent = (function () {
    function AppComponent() {
        this.laUniversidad = "universidad nacional";
    }
    AppComponent.prototype.mostrarEstudiante = function (evento) {
        console.log(evento.nombre);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<h1>Aprende Angular 2 F\u00E1cilmente!!!</h1>\n  <estudiantes [mi-universidad] = \"laUniversidad\"\n  (seleccionado) = \"mostrarEstudiante($event)\"></estudiantes>\n  <universidades (decano) = mostrarEstudiante($event) ></universidades>\n  <pipes></pipes>\n  ",
            directives: [estudiantes_component_1.EstudiantesComponent, universidades_component_1.UniversidadesComponent, pipes_component_1.PipesComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map