class Persona {
     nombre: string;
    apellido: string;
    edad: number;

    constructor(nombre: string, apellido: string, edad: number) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    saludar(): void {
        console.log('Hola mi nombre es: ' + this.nombre + ' ' + this.apellido);
        console.log(`Hola mi nombre es: 
        ${this.nombre} 
        ${this.apellido}`);

    }
}

class Trabajador extends Persona {
    numeroEmpleado: number;

    horaDeEntrada() {
        console.log("Mi hora de entra es 8am");
    }

}

var estudiante: Persona = new Persona("Jose", "Calderon", 23);
//estudiante.nombre = "Santiago";
//estudiante.apellido = "Apaza";

estudiante.saludar();

var trabajador: Trabajador = new Trabajador("Carlos", "Quintero", 34);
trabajador.saludar();
trabajador.numeroEmpleado = 1234;
trabajador.horaDeEntrada();


// para compilar y ejecutar 
// tsc clases.ts
// node clases.ts