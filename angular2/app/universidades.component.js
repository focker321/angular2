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
var UniversidadesComponent = (function () {
    function UniversidadesComponent() {
        this.decano = new core_1.EventEmitter();
        this.estudiantePipe = {
            nombre: "Carlos",
            apellido: "Vargas",
            fdn: new Date(1995, 9, 2),
            promedio: 4.3723,
            prestamo: 5000
        };
    }
    UniversidadesComponent.prototype.clickEnTemplate = function (evento) {
        this.decano.emit({ nombre: evento.target.textContent });
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], UniversidadesComponent.prototype, "decano", void 0);
    UniversidadesComponent = __decorate([
        core_1.Component({
            selector: 'universidades',
            template: "<h3>\n        <span (click) = clickEnTemplate($event)>\n            Titulo\n        </span>\n    </h3>\n    <div class=\"jumbotron\">\n        {{estudiantePipe.nombre | uppercase | slice:0:1}}. {{estudiantePipe.apellido | lowercase}}\n        <br />\n        {{estudiantePipe.fdn | date:'MMMM yyy'}}\n        <br />\n        {{estudiantePipe.promedio | number:'2.2-2'}}\n        <br />\n        {{estudiantePipe.prestamo | currency:'EUR':true}}\n        <br />\n        {{estudiantePipe | json}}\n    </div>"
        }), 
        __metadata('design:paramtypes', [])
    ], UniversidadesComponent);
    return UniversidadesComponent;
}());
exports.UniversidadesComponent = UniversidadesComponent;
//# sourceMappingURL=universidades.component.js.map