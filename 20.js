const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function factorial(numero){
  let t = 1;
    for(let i = 0; i < numero; i++)
      t = t * (i + 1);
    return t;
}

rl.question("Introduzca un numero ", (numero) =>{
    console.log(`El factorial de ${numero} es ${factorial(numero)}`);
    rl.close();
});
