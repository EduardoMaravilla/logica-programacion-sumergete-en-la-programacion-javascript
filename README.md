# Lógica de programación: sumergete en la programación

# Índice
A. [Iniciando con javascript](#1-iniciando-con-javascript-desafíos)
B. [Condicionales y Concatenación](#2-condicionales-y-concatenación-desafíos)

## 1. Iniciando con javascript [Desafíos](Iniciando_con_javascript.js)

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
