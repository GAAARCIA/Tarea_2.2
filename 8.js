const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Escribe una letra (en mayusculas): ', (letra)=>{
    if (!(letra === 'S' || letra === 'N')){
        console.log('Letra incorrecta');
    }
    else console.log('Muy bien');
    rl.close();
});
