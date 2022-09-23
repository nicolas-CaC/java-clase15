let numero = prompt('ingresame un número');
let otroNumero = prompt('ingresame otro número');

let operadorLogico = numero < otroNumero;

// alert(numero)
// alert(otroNumero)

// console.log(operadorLogico)

// const esMenor = 'El primer número es menor que el otro número'
// const esMayor = 'El primer número es mayor que el otro número'
const esMenor = `El primer número (${numero}) es menor que el otro número (${otroNumero}) y el valor de la operación lógica es ${operadorLogico}`
const esMayor = 'El primer número (${numero}) es mayor que el otro número (${otroNumero})'

if (operadorLogico) {
    alert(esMenor)
} else {
    alert(esMayor)
}