// Desafíos:

// 1. Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'. Muestra cada número.
let contador1 = 1;
while (contador1 <= 10) {
  console.log(contador1);
  contador1++;
}
// 2. Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'. Muestra cada número.
let contador2 = 10;
while (contador2 >= 0) {
  console.log(contador2);
  contador2--;
}
// 3. Crea un programa de cuenta regresiva. Pide un número y cuenta desde ese número hasta 0 utilizando un bucle 'while' en la consola del navegador.
let numeroRegresivo = parseInt(prompt("Ingrese un número para la cuenta regresiva"));
while (numeroRegresivo >= 0) {
  console.log(numeroRegresivo);
  numeroRegresivo--;
}
// 4. Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.
let numeroProgresivo = parseInt(prompt("Ingrese un número para la cuenta progresiva"));
let contador3 = 0;
while (contador3 <= numeroProgresivo) {
  console.log(contador3);
  contador3++;
}
