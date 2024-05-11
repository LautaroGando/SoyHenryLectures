const perro = {
    raza: 'Salchicha',
    nombre: 'Pancho',
    edad: 3,
    color: 'Marron',
};

const perro2 = {...perro, nombre: 'Fido'};

console.log(perro2);

/* ----------------------------------------------------------- */

/* const miArreglo = [true, 'Palabra', {a: 5}];

miArreglo.push('Nuevo elemento');

console.log(miArreglo); */

/* ----------------------------------------------------------- */

/* const miArreglo = [true, 'Palabra', {a: 5}];

const miNuevoArreglo = [...miArreglo, 'Nuevo Elemento'];

console.log(miNuevoArreglo); */

/* ----------------------------------------------------------- */

/* const miArreglo1 = [4, 5, 89, 1];

const miArreglo2 = [45, 78, 12, 3];

const miArreglo3 = [...miArreglo1, ...miArreglo2];

console.log(miArreglo3); */