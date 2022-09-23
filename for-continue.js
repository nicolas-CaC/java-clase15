console.clear();

let a = 10;
let i = 0

for (i; i < a; i++) {

    if ((i === 3) ||
        (i === 5) ||
        (i === 7)) {
        continue;
    }

    console.log(i)
}



console.clear();

for (let i = 0; i <= 20; i++) {

    if (i === 1) {
        let operacion = i + 1
        console.log('operacion suma:', operacion)
    }
    // console.log('Este es el valor de operacion:', operacion)

    if (i === 2) {
        let operacion = i * 1
        console.log('operacion multiplicacion:', operacion)
    }

    if (i === 3) {
        let operacion = i - 1
        console.log('operacion resta:', operacion)
    }

    if (i === 4) {
        let operacion = i / 2
        console.log('operacion division:', operacion)
    }

    if (i === 5) {
        let operacion = i % 2
        console.log('operacion resto:', operacion)
    }

    if (i === 6) {
        console.log('operacion potencia:', i ** 3)
    }

    if (i % 2 === 0) {
        console.log(i, 'es par')
    } else {
        console.log(i, 'es impar')
    }

}
