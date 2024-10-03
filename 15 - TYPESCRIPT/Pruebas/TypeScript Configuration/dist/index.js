"use strict";
const arrNumeros = [1, 2, 3, 4];
const sumar = (arr) => {
    let suma = 0;
    for (const num of arr) {
        suma += num;
    }
    ;
    return suma;
};
console.log(sumar(arrNumeros));
