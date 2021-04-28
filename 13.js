let contador = 0;

for(let i = 1; i <= 100; i++){
    if ( i % 2 == 0 || i % 3 == 0){
        contador++;
        console.log(i);
    }
}
console.log("Total de números: " + contador);
