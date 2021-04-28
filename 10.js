const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese un número: ',(numero)=>{
    if(numero%2 == 0){
        console.log("Es un número par")
    }else{
        console.log("Es un número impar");
    }
    rl.close();
});
