// Desafíos:

// 1. Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!".
let diaDeSemana = prompt("Por favor, Ingrese el día de la semana");
if (diaDeSemana === "Sábado" || diaDeSemana === "Domingo") {
  alert("¡Buen fin de semana!");
} else {
  alert("¡Buena semana!");
}
// 2. Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.
let numeroUsuario = prompt("Por favor, Ingresa un número");
if (numeroUsuario > 0) {
  alert("El número ingresado es positivo");
} else if (numeroUsuario < 0) {
  alert("El número ingresado es negativo");
} else {
  alert("El número ingresado es cero");
}
// 3. Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has ganado!". En caso contrario, muestra "Intentalo nuevamente para ganar.".
let puntuacionIngresada = prompt("Ingrese la puntuación");
if (puntuacionIngresada >= 100) {
    alert("¡Felicidades, has ganado!");
}else {
    alert("Intentalo nuevamente para ganar.");
}
// 4. Crea un mensaje que informe al usuario sobre el saldo de su cuenta, utilizando un template string para incluir el valor del saldo.

let saldoCuenta = 1000;
let mensajeSaldo = `Tu saldo en la cuenta es ${saldoCuenta}`;
alert(mensajeSaldo);

// 5. Pide al usuario que ingrese su nombre mediante un prompt. Luego, muestra una alerta de bienvenida usando ese nombre.

let nombreUsuario = prompt("Por favor, Ingrese su nombre");
alert(`¡Bienvenido ${nombreUsuario}!`);
