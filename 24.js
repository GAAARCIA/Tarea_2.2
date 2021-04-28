const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function primo(numero){
    if(numero == 1 || numero == 4) return false;

    for(let i = 2; i < numero/2; i++){
        if (numero%i == 0)
            return false;
    }
    return true;
}

rl.question("Ingrese un número: ", function(num){
  if(primo(num) == false)
    console.log("No es primo");
  else
    console.log("Es primo");

 rl.close();
});
