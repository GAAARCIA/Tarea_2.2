// Me ayude de esta página --> https://nodejs.org/api/readline.html

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let frase = 0;

rl.on('line',()=>{
    frase++;
}).on('close', () => {
    console.log('Total de frases: ' + frase);
    process.exit(0);
  });

rl.prompt();
