/* function mostrarNombre(persona) {

    const {apellido, edad, nombre} = persona;

    console.log('El nombre del usuario es', nombre,'Y su apellido es', apellido);

};

const persona = {
    nombre: 'Carlos',
    apellido: 'Perez',
    edad: 50,
    email: 'cperez@mail.com',
    direccion: 'Calle Falsa 123',
    ciudad: 'Posadas',
    pais: 'Argentina',
};

mostrarNombre(persona); */

/* ----------------------------------------------------------- */

const miArray = [1, 2, 3, 4];

const [num1, num2, num3, num4] = miArray;

const palabras = ['Hola', 'Jorge', 'cperez@mail.com', 'Calle Falsa 123'];

const [saludo, nombre, email, direccion] = palabras;