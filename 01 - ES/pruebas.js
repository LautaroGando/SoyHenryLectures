const persona = {
    name: 'Lautaro',
    surname: 'Gando',
    age: 22,
    propertyDinamic(clave, valor) {
        this[clave] = valor;
    },
};

function agregarPropiedad({ name, surname, age }) {

    console.log(`Tu nombre es: ${name}, tu apellido: ${surname}, tu edad: ${age}`);

};

agregarPropiedad(persona);

agregarPropiedad({ name: 'Alejandro', surname: 'Robledo', age: 32 });

persona.propertyDinamic('team', 'Velez');

console.log(persona);

function concatenarPalabras(...palabras) {

    let oracion = '';

    for (let i = 0; i < palabras.length; i++) {

        oracion += `${palabras[i]} `;

    };

    return console.log(oracion.trim());

};

concatenarPalabras('Hola', 'Lautaro', 'Todo', 'Bien');

const copyPersona = { ...persona };

console.log(copyPersona);

function name() {

    const obj = {
        nombre: 'Lauti',
        saludo() {
            console.log(`Hola ${this.nombre}`);
        },
    };

    return obj;

};

name().saludo();

const objeto = {
    nombre: "Ejemplo",
    metodo: function () {
        setTimeout(() => {
            console.log(`Hola, soy ${this.nombre}`);
        }, 1000);
    }
};

objeto.metodo();

let path = "/smart";

console.log(path);

path = path.split("s").pop()

console.log(path);