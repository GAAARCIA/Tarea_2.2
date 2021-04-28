const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});.

var contador = 0;
var contadorPar = 0;
var sumaImpar = 0;

for (let i = numero1; i <= numero2; i++){
    console.log(i);
    contador++;
    if(i%2 == 0){
        contadorPar++;
    }else{
        sumaImpar+=i;
    }
}

console.log("Total: " + contador);
console.log("Total pares: " + contadorPar);
console.log("Suma de impares: " + sumaImpar);
