const a = 1;
const b = 2;
let c = 0;

// if (a > b) {
//     c = 10
// } else if (a < b) {
//     c = 200
// }

if (a > b) {
    c = 10
}

// Es lo mismo que escribirlo de las siguientes maneras:
// if (a > b) {c = 10}
// if (a > b) c = 10

if (a > b) {
    c = 10
}

if (a < b) {
    c = 200
}

console.log('c: ', c)

console.clear();

switch (a > b) {
    case true:
        console.log('case true: A es mayor a B')
    case false:
        console.log('case false: A es menor a B')
}

// c += 20
c = 10
console.log('ESTE ES EL VALOR ACTUAL DE C:', c)

switch (c) {
    case 0:
        console.log('case 0: C vale 0')
        break;
    case 10:
        console.log('case 10: C vale 10')
        break;
    case 200:
        console.log('case 200: C vale 200')
        break;
    case 1234535574357:
        console.log('case 1234535574357: C vale 1234535574357')
        break;
    default:
        console.log('case default: C no vale ni 0, ni 10, ni 200, vale esto:', c)
        break;
}

// let d = 234523452345
// console.log(d)





