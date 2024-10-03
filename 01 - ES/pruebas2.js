/* const agregarPropiedad = {
    nombre: "Lautaro",
    apellido: "Gando",
    propDinamica(clave, valor) {

        this[clave] = valor;

    },
};

agregarPropiedad.propDinamica("edad", 22);

console.log(agregarPropiedad); */

/* function oracion(...string) {

    const unirString = string.join(" ");
  
    console.log(unirString);

};

oracion("Hola", "como", "te", "va"); */

function sumarNumeros(...numeros) {

    let suma = 0;

    numeros.forEach(number => {

        suma += number;

    });

    console.log(suma);

    console.log(numeros);

};

sumarNumeros(2, 3, 7, 8, 3);
sumarNumeros(18, 17, 10)