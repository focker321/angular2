var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Persona = (function () {
    function Persona(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
    Persona.prototype.saludar = function () {
        console.log('Hola mi nombre es: ' + this.nombre + ' ' + this.apellido);
        console.log("Hola mi nombre es: \n        " + this.nombre + " \n        " + this.apellido);
    };
    return Persona;
}());
var Trabajador = (function (_super) {
    __extends(Trabajador, _super);
    function Trabajador() {
        _super.apply(this, arguments);
    }
    Trabajador.prototype.horaDeEntrada = function () {
        console.log("Mi hora de entra es 8am");
    };
    return Trabajador;
}(Persona));
var estudiante = new Persona("Jose", "Calderon", 23);
//estudiante.nombre = "Santiago";
//estudiante.apellido = "Apaza";
estudiante.saludar();
var trabajador = new Trabajador("Carlos", "Quintero", 34);
trabajador.saludar();
trabajador.numeroEmpleado = 1234;
trabajador.horaDeEntrada();
// para compilar y ejecutar 
// tsc clases.ts
// node clases.ts 
