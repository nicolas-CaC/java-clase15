let cadena = 'Estoy vacío porque el número ingresado es mayor a 100';
let salidaIf;
let numeroIngresado = prompt('Ingresate un número pa');

if (numeroIngresado < 100) {
    salidaIf = 'El número es menor a 100';
}

const variable = salidaIf || cadena;

document.write('el valor de la variable es: ', variable)