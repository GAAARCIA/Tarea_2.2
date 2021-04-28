let sumaImpar = 0;
let sumaPar = 0;

for (let i = 1; i <= 1000; i++){
    if(i%2 == 0) sumaPar += i;
    else sumaImpar += i;
}
console.log("Suma par: " + sumaPar);
console.log("Suma impar: " + sumaImpar);
