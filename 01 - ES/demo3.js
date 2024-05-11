/* const miObjeto = new Object();

miObjeto.nombre = 'Jorge';
miObjeto.apellido = 'Vega';

console.log(miObjeto); */

/* const miObjeto = {
    nombre: 'Jorge',
    apellido: 'Vega',
    edad: 31,
}; */

/* const nombre = 'Jorge';
const apellido = 'Vega';

const persona = {
    nombre,
    apellido,
}; */

function unaFuncionCualquiera(nombre, apellido, edad) {

    const persona = {
        nombre,
        apellido,
        edad,
    };

    // Probablemente con este objeto haga algunas cosas aqui dentro de la funcion

    return persona;

};

console.log(unaFuncionCualquiera('Jorge', 'Vega', 31));       