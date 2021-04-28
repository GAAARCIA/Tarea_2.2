const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingresa un número: ',(numero)=>{
    if(numero < 0){
        console.log("Es un número negativo")
    }else{
        console.log("Es un número positivo");
    }
    rl.close();
});
