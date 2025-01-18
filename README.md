# Lógica de programación: sumergete en la programación
Curso de [Alura Latam](https://app.aluracursos.com/course/logica-programacion-sumergete-programacion-javascript)
# Índice

1.  [Iniciando con Javascript](#1-iniciando-con-javascript-desafíos)
2.  [Condicionales y Concatenación](#2-condicionales-y-concatenación-desafíos)
3.  [Loops y Tentativas](#3-loops-y-tentativas-desafíos)
4.  [Buenas Practicas de Programación](#4-buenas-practicas-de-programación-desafíos-finales)

---

## 1. Iniciando con javascript [Desafíos](iniciando_con_javascript.js)

1. Muestra una alerta con el mensaje "¡Bienvenida y bienvenido a nuestro sitio web!".

```javascript
alert("¡Bienvenida y bienvenido a nuestro sitio web!");
```

2. Declara una variable llamada nombre y asígnale el valor "Lua".

```javascript
let nombre = "Lua";
```

3. Crea una variable llamada edad y asígnale el valor 25.

```javascript
let edad = 25;
```

4. Establece una variable numeroDeVentas y asígnale el valor 50.

```javascript
let numeroDeVentas = 50;
```

5. Establece una variable saldoDisponible y asígnale el valor 1000.

```javascript
let saldoDisponible = 1000;
```

6. Muestra una alerta con el texto "¡Error! Completa todos los campos".

```javascript
alert("¡Error! Completa todos los campos");
```

7. Declara una variable llamada mensajeDeError y asígnale el valor "¡Error! Completa todos los campos". Ahora muestra una alerta con el valor de la variable mensajeDeError .

```javascript
let mensajeDeError = "¡Error! Completa todos los campos";
alert(mensajeDeError);
```

8. Utiliza un prompt para preguntar el nombre del usuario y almacénalo en la variable nombre.

```javascript
let nombreUsuario = prompt("Por favor, Ingrese el nombre");
console.log(nombreUsuario);
```

9. Pide al usuario que ingrese su edad usando un prompt y almacénala en la variable edad.

```javascript
let edadUsuario = prompt("Por favor, Ingrese edad");
console.log(edadUsuario);
```

10. Ahora, si la edad es mayor o igual a 18, muestra una alerta con el mensaje "¡Puedes obtener tu licencia de conducir!".Si necesitas ayuda, las soluciones a las actividades estarán disponibles en la sección

```javascript
if (edad >= 18) {
  alert("¡Puedes obtener tu licencia de conducir!");
}
```

---

## 2. Condicionales y Concatenación [Desafíos](condicionales_concatenacion.js)

1. Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!".

```javascript
let diaDeSemana = prompt("Por favor, Ingrese el día de la semana");
if (diaDeSemana === "Sábado" || diaDeSemana === "Domingo") {
  alert("¡Buen fin de semana!");
} else {
  alert("¡Buena semana!");
}
```

2. Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.

```javascript
let numeroUsuario = prompt("Por favor, Ingresa un número");
if (numeroUsuario > 0) {
  alert("El número ingresado es positivo");
} else if (numeroUsuario < 0) {
  alert("El número ingresado es negativo");
} else {
  alert("El número ingresado es cero");
}
```

3. Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has ganado!". En caso contrario, muestra "Intentalo nuevamente para ganar.".

```javascript
let puntuacionIngresada = prompt("Ingrese la puntuación");
if (puntuacionIngresada >= 100) {
  alert("¡Felicidades, has ganado!");
} else {
  alert("Intentalo nuevamente para ganar.");
}
```

4. Crea un mensaje que informe al usuario sobre el saldo de su cuenta, utilizando un template string para incluir el valor del saldo.

```javascript
let saldoCuenta = 1000;
let mensajeSaldo = `Tu saldo en la cuenta es ${saldoCuenta}`;
alert(mensajeSaldo);
```

5. Pide al usuario que ingrese su nombre mediante un prompt. Luego, muestra una alerta de bienvenida usando ese nombre.

```javascript
let nombreUsuario = prompt("Por favor, Ingrese su nombre");
alert(`¡Bienvenido ${nombreUsuario}!`);
```

---

## 3. Loops y tentativas [Desafíos](loops_y_tentativas.js)

1.  Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'. Muestra cada número.

```javascript
let contador1 = 1;
while (contador1 <= 10) {
  console.log(contador1);
  contador1++;
}
```

2.  Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'. Muestra cada número.

```javascript
let contador2 = 10;
while (contador2 >= 0) {
  console.log(contador2);
  contador2--;
}
```

3.  Crea un programa de cuenta regresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.

```javascript
let numeroRegresivo = parseInt(prompt("Ingrese un número"));
while (numeroRegresivo >= 0) {
  console.log(numeroRegresivo);
  numeroRegresivo--;
}
```

4.  Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.

```javascript
let numeroProgresivo = parseInt(prompt("Ingrese un número"));
let contador3 = 0;
while (contador3 <= numeroProgresivo) {
  console.log(contador3);
  contador3++;
}
```

---

## 4. Buenas practicas de Programación [Desafíos Finales](buenas_practicas_de_programacion.js)

1.  Crea un programa que utilice console.log para mostrar un mensaje de bienvenida.

```javascript
console.log("¡Bienvenido a Buenas Practicas de Programación!");
```

2.  Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza console.log para mostrar el mensaje "¡Hola, [tu nombre]!" en la consola del navegador.

```javascript
let nombre = "Eduardo";
console.log(`¡Hola, ${nombre}!`);
```

3.  Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza alert para mostrar el mensaje "¡Hola, [tu nombre]!".

```javascript
let nombreAlert = "Eduardo";
alert(`!Hola, ${nombreAlert}!`);
```

4.  Utiliza prompt y haz la siguiente pregunta: ¿Cuál es el lenguaje de programación que más te gusta?. Luego, almacena la respuesta en una variable y muestra la respuesta en la consola del navegador.

```javascript
let lenguajeProgramacion = prompt(
  "¿Cuál es el lenguaje de programación que más te gusta?"
);
console.log(
  `El lenguaje de programación que mas me gusta es: ${lenguajeProgramacion}`
);
```

5.  Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, realiza la suma de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". Utiliza console.log para mostrar el mensaje "La suma de [valor1] y [valor2] es igual a [resultado]." en la consola.

```javascript
let valor1 = 42;
let valor2 = 21;
let resultado = valor1 + valor2;
console.log(`La suma de ${valor1} y ${valor2} es igual a ${resultado}`);
```

6.  Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, realiza la resta de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". Utiliza console.log para mostrar el mensaje "La diferencia entre [valor1] y [valor2] es igual a [resultado]." en la consola.

```javascript
let valor1 = 15;
let valor2 = 10;
let resultado = valor1 - valor2;
console.log(
  `La diferencia entre ${valor1} y ${valor2} es igual a ${resultado}`
);
```

7.  Pide al usuario que ingrese su edad con prompt. Con base en la edad ingresada, utiliza un if para verificar si la persona es mayor o menor de edad y muestra un mensaje apropiado en la consola.

```javascript
let edadUsuario = prompt("Ingrese su edad");
if (edadUsuario >= 18) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}
```

8.  Crea una variable "numero" y solicita un valor con prompt. Luego, verifica si es positivo, negativo o cero utilizando un if-else y muestra el mensaje correspondiente.

```javascript
let numero = prompt("Ingrese un número, por favor");
if (numero > 0) {
  console.log("El número es positivo");
} else if (numero < 0) {
  console.log("El número es negativo");
} else {
  console.log("El número es cero");
}
```

9.  Utiliza un bucle while para mostrar los números del 1 al 10 en la consola.

```javascript
let contador = 1;
while (contador <= 10) {
  console.log(contador);
  contador++;
}
```

10. Crea una variable "nota" y asígnale un valor numérico. Utiliza un if-else para determinar si la nota es mayor o igual a 7 y muestra "Aprobado" o "Reprobado" en la consola.

```javascript
let nota = 6;
if (nota >= 7) {
  console.log("Aprobado");
} else {
  console.log("Reprobado");
}
```

11. Utiliza Math.random para generar cualquier número aleatorio y muestra ese número en la consola.

```javascript
let numeroAleatorio = Math.random();
console.log(numeroAleatorio);
```

12. Utiliza Math.random para generar un número entero entre 1 y 10 y muestra ese número en la consola.

```javascript
let numeroAleatorio = parseInt(Math.random() * 10) + 1;
console.log(numeroAleatorio);
```

13. Utiliza Math.random para generar un número entero entre 1 y 1000 y muestra ese número en la consola.

```javascript
let numeroAleatorio = parseInt(Math.random() * 1000) + 1;
console.log(numeroAleatorio);
```
---
