"use strict";
const nombre = "Jorge";
const apellido = "Vega";
const edad = 32;
console.log(nombre.toUpperCase());
console.log(apellido.toUpperCase());
const alive = true;
const numPares = [2, 4, 6, 8, 10];
const palabras = ["Hola", "Chau", "Jorge"];
const numeros = [];
numeros.push(10);
numeros.push(5);
numeros.push(0);
let unaVariable = "Hola";
unaVariable = 5;
unaVariable = true;
const sumarNumeros = (arr) => {
    let suma = 0;
    for (const num of arr)
        suma += num;
    return suma;
};
console.log(sumarNumeros(numPares));