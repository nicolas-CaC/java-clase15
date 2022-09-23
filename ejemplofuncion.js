console.clear();

let a = 1;
let b = 2;

function suma() {
    let suma = a + b;
    console.log('Valor suma:', suma)
}

suma()

console.clear();

// const precio = 100;

function iva(valorProducto) {
    const iva = (valorProducto / 100) * 21
    console.log('precio del producto: $' + valorProducto)
    console.log('Valor IVA: $' + iva)
    console.log('Valor total del producto: $' + (valorProducto + iva) + '\n')
}

// iva(100)
// iva(200)
// iva(300)
// iva(500)
// iva(1000)

const valorPorPrompt = Number(prompt('Ingrese el valor del producto'))
iva(valorPorPrompt)