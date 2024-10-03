/* console.log("Esto es un contexto de ejecucion");

const sumar = (a, b) => {

    console.log("Estamos sumando numeros");

    return a + b;

};

const restar = (a, b) => a - b;

sumar(4, 5);
restar(5, 1);
sumar(4, 8);

console.log("Hemos finalizado"); */

/* let num1 = 5;
let num2 = 10;

const sumar = (num1, num2) => {

    console.log(num1);
    console.log(num2);

    return num1 + num2;

};

sumar(8, 9); */

/* console.log(num1);
console.log(num2);

var num1 = 5;
var num2 = 10;

console.log(num1);
console.log(num2);

function sumar(a, b) {

    return a + b;

};

function miFunc() {

    var num = 10;

    num1 = 8;

    console.log(num1);
    console.log(num2);
    console.log(num);

};

miFunc();

console.log(num1);
console.log(num2);
console.log(num); */

/* function crearContador() {

    let count = 0;

    return function () {

        count++;

        return count;

    };

};

const contador = crearContador();

console.log(contador());
console.log(contador());
console.log(contador());
console.log(contador());

let count = 10000;

console.log(contador());
 */

console.log("1");

setTimeout(() => {
    console.log("2");
}, 0);

Promise.resolve().then(() => {
    console.log("3");
});

console.log("4");