const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let contador = 0;

rl.question('Ingresa el número máximo que quiere: ',(numero)=>{
        for(let i = 1; i <= numero; i++){
          if(i%3 == 0){
              console.log(i);
              contador += 1;
          }
        }
          console.log('Total de números:' + contador);
    rl.close();
});
