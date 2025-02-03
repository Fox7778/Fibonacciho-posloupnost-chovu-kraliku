// Funkce pro generování Fibonacciho posloupnosti
function generateFibonacci(n) {
  const fibonacci = document.getElementById("fibonacci");
  let a = 1, b = 1, temp;
  let i = 0;
  while (i <= n) {
    const mesic = document.createElement("div");
    mesic.classList.add("rabbit");
   //console.log(a);
   let stars ="";
   let j = 0;
   while(j < a){
    stars+="**";
    j++;
   }
   mesic.innerHTML = stars;
   fibonacci.appendChild(mesic);
   temp = a + b;
   a = b;
   b = temp;
   i++;
   }
}


// Spuštění generování Fibonacciho posloupnosti s 6 prvky
generateFibonacci(6);