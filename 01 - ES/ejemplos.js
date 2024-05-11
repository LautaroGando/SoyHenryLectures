/* var caja = 5;

if (true) {

    var caja = [];

};

console.log(caja); */
/* Empecemos por declarar la variable “caja” utilizando var y luego volverla a declarar dentro de un bloque if. Al hacer console.log podemos ver que el valor de la variable global ha sido modificado. */

/* ----------------------------------------------------------- */

/* var caja = 5;

if (true) {

    var caja = [];
    
};

if (true) {

    let caja = 'No hay cambios';

};

console.log(caja); */
/* Ahora volvamos a modificar el valor de "caja" dentro de un condicional, pero esta vez volviéndola a declarar con let.

Podemos ver que el valor en este caso no cambia ¿Por qué ocurre esto? Esto es gracias a que nuestra variable declarada con let tiene un scope de bloque y solo existe dentro de las llaves del condicional ({}). */

/* ----------------------------------------------------------- */

/* for (var i = 0; i < 5; i++) {

    setTimeout(function() {

        console.log(i);

    }, 1000);
     
};

setTimeout(function() {

    console.log('Valor final de "i" usando "var": ', i);

}, 6000); */

/* for (let i = 0; i <= 5; i++) {

    setTimeout(function() {

        console.log(i);

    }, 1000);
     
};

setTimeout(function() {

    console.log('Valor final de "i" usando "let": ', i);

}, 6000); */

/* for (const i = 0; i < 5; i++) {

    setTimeout(function() {

        console.log(i);

    }, 1000);
     
};

setTimeout(function() {

    console.log('Valor final de "i" usando "var": ', i);

}, 6000); */
/* En este ejemplo crearemos un bucle for para imprimir en la consola los números del 1 al 5, y, luego de 1 segundo, imprimiremos el valor final de la variable i por fuera del bucle.

[NOTA]: la función llamada setTimeOut(function, time) permite demorar la ejecución del código en un tiempo específico que nosotros definamos.

Como podemos ver, ¡el resultado no es el que esperábamos! En lugar de imprimir únicamente la secuencia de números del 0 al 5, estamos imprimiendo el número 5. Y no solo esto: después de 6 segundos y por fuera del bloque for el valor de i sigue existiendo! Esto podría causarnos muchos problemas, ¿cierto?

Podemos ver en este caso que el contador está realizando correctamente la cuenta de los números del 0 al 5, dado que el valor de i definido con let se mantiene gracias al scope de bloque. Esto es, cada iteración del bucle tiene su propia variable i, razón por la cual al tratar de acceder al valor de i por fuera del bucle for recibimos un error. */

/* ----------------------------------------------------------- */

/* console.log(x);

var x = 5;

console.log(x);

console.log(y);

let y = 5;

console.log(y); */

/* ----------------------------------------------------------- */

const griffindor = {
    casa: 'Griffindor',
    ubicacion: 'Torre del castillo',

    asignarPropDinamica(clave, valor) {
        this[clave] = valor;
    },
};

/* En este ejemplo contamos con un objeto llamado griffindor. Este objeto tiene dos propiedades (casa y ubicación), y además tiene un método (asignarPropDinamica).

Este método, lo que permite, es agregar de forma dinámica una nueva propiedad en el objeto. */

griffindor.asignarPropDinamica('alumno', 'Harry Potter');

console.log(griffindor);

/* Es decir, si nosotros ejecutamos este método, veremos como automáticamente el objeto contará con una nueva propiedad y su valor. */

/* ----------------------------------------------------------- */

var obj = {
    saludo: 'Hola',
    saludar() {
        console.log(this.saludo);
    },
    ['prop' + 'Dinamica']: 10,
};

console.log(obj);

/* En resumen, los objetos de JavaScript nos permiten crear propiedades de una manera flexible, sin la necesidad de siempre utilizar la sintaxis dot-notation. */

/* ----------------------------------------------------------- */

/* function imprimirMensaje() {
    
    console.log('Mensaje:\n aqui hubo un salto de linea.');
    
};

imprimirMensaje(); */

/* function crearPersona({nombre, apellido, edad}) {
  
    console.log(nombre, apellido, edad);

};

crearPersona({nombre: 'Lautaro', apellido: 'Gando', edad: 22}); */

/* ----------------------------------------------------------- */

/* function sumar(...numeros) {
    
    return numeros.reduce((a, b) => a + b);

};

console.log(sumar(4, 5, 6, 8));

console.log(sumar(1, 2)); */

/* ----------------------------------------------------------- */

/* let valor1 = null;

let valor2 = 'Valor por defecto';

let resultado = valor1 ?? valor2;

console.log(resultado); */

/* ----------------------------------------------------------- */

/* let a = null;

let b = "Texto1";

let c = "Texto2";

let d = undefined;

let resultado = d ?? a;

console.log(resultado); */

/* ----------------------------------------------------------- */

console.log(sumar(4, 5, 8));

function sumar(...numeros) {
    
    let suma = 0;

    for (let i = 0; i < numeros.length; i++) {
        
        suma += numeros[i];
        
    };

    return suma;

};

console.log(sumar(4, 5, 7));