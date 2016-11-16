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
var EstudiantesComponent = (function () {
    function EstudiantesComponent() {
        this.seleccionado = new core_1.EventEmitter();
        this.titulo = "Lista de estudiantes!!!";
        this.estudiantes = ["Santiago Apaza", "Rosmery Meza"];
        this.imgUrl = "http://lorempicsum.com/futurama/255/200/2";
        this.redondeadas = false;
        this.padding = true;
    }
    EstudiantesComponent.prototype.alerta = function () {
        console.log("Hola Mundo");
        alert("Esta es una alerta");
    };
    EstudiantesComponent.prototype.listaDeEstudiantes = function () {
        if (this.universidad == "universidad nacional") {
            return ["Andres Arias", "Carlos Castro", "Ricardo Ramirez"];
        }
        else {
            return ["Ricardo Macedo", "Nataly Flores"];
        }
    };
    EstudiantesComponent.prototype.clickEnEstudiante = function (evento) {
        this.seleccionado.emit({ nombre: evento.target.textContent });
    };
    __decorate([
        core_1.Input("mi-universidad"), 
        __metadata('design:type', String)
    ], EstudiantesComponent.prototype, "universidad", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], EstudiantesComponent.prototype, "seleccionado", void 0);
    EstudiantesComponent = __decorate([
        core_1.Component({
            selector: 'estudiantes',
            templateUrl: "app/templates/estudiante.template.html"
        }), 
        __metadata('design:paramtypes', [])
    ], EstudiantesComponent);
    return EstudiantesComponent;
}());
exports.EstudiantesComponent = EstudiantesComponent;
//# sourceMappingURL=estudiantes.component.js.map