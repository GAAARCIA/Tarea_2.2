const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function sort(numero){
    let llave, j;
    for(let i = 1; i < numero.length; i++){
        llave = numero[i];
        j = i - 1;

        while(j >= 0 && numero[j] > llave){
            numero[j+1] = numero[j];
            j = j - 1;
        }
        numero[j+1] = llave;
    }
}

let suma = 0;
let contador = 0;

rl.on('line', (line) =>{
    let numero = line.split('-'); // https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/split
    for(let i = 0; i < numero.length; i++){
        numero[i] = Number.parseInt(numero[i]);
    }

    sort(numero);

    for(let i = 0; i < numero.length; i++){
        if (numero[i] % 2 == 0){
            contador++;
            suma += numero[i];
            console.log(numero[i]);
        }
    }
    console.log("Total de números múltiplos de 2: " + contador);
    console.log("Suma total de los números múltiplos: " + suma);
    rl.close();
});

console.log("Al ingresar los números, incluya un - entre cada uno");
rl.prompt();
