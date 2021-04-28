let array = [];

for(let i = 0; i < 5; i++){
    const readline = require('readline');
    const numero = readline.question("Ingresa 5 números: "); // ¿?
    array[i] = numero;
}

array.sort();
console.log(array);
console.log("Numero mayor: " + array[0] + ". Numero menor: " + array[4]);
