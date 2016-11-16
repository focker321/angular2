//var nombre:number;
//nombre = 10;

//string

var nombre: string = "Santiago";
//number
var edad: number = 10;

//boolean
var casado: boolean = false;

//Array
var amigos: Array<string> = ['carlos', 'jose', 'andres']
var hermanos: string[] = ['Ricardo', 'Alfonso']; 

//Enums
enum Parentesco {
    Padre, Madre, Hermano, Hermana, Hijo, Hija
};
var parentesco: Parentesco = Parentesco.Padre;

//Any
var miVariable: any;
miVariable = 10;
miVariable = "test";
miVariable = true;
miVariable = [1, 2, 3, 4];

//Void
function grabarInformacion(informacion: string): void {
    // escribir codigo
}