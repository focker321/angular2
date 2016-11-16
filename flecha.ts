var numeros: number[] = [1, 2, 3, 4, 5];
console.log(numeros.map(n => n + 3)); // los parentesis del parametro puede ser omitido debido a que es un solo parametro
// function sumarUno(n) { return n + 1}

numeros.forEach((elemento, indice, array) => {
    console.log(`numeros[${indice}] = ${elemento}`);
});

var adicion = (n) =>  { return n + n }
// var adicion = (n) =>  n + n;   
console.log('-----' + numeros.map(adicion));
