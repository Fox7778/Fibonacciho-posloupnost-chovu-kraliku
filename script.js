// Funkce pro generování Fibonacciho posloupnosti
function generateFibonacci(n) {
let a = 1, b = 1, temp;
let i = 0;
while (i <= n) {
  console.log(a);
  temp = a + b;
  a = b;
  b = temp;
  i++;
}
}


// Spuštění generování Fibonacciho posloupnosti s 6 prvky
generateFibonacci(6);