let sumPar = 0;
let sumImpar = 0;

for(let i = 1; i <= 100; i++){
    console.log(i);
    if(i%2 == 0)
      sumPar += i;
    else
      sumImpar += i;
}

console.log('Suma de numeros pares: ' + sumPar);
console.log('Suma de numeros impares: ' + sumImpar);
