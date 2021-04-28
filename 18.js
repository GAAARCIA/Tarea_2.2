const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let l;
let contador = 0;

rl.question("Letra a buscar: ", (letra)=>{
    l = letra;
});

rl.on('line', (line) =>{
    for(let c of line){
        if (c === l) contador++;
    }
    console.log(`La letra "${l}" aparece ${contador}`);
    rl.close();
});
rl.prompt();
