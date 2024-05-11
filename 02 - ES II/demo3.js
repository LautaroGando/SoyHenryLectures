function Persona(nombre, edad) {

    this.nombre = nombre;
    this.edad = edad;

};

Persona.prototype.saludar = function () {

    console.log(`Hola. Soy ${this.nombre}`);

};

const persona1 = new Persona('Lautaro', 22);

console.log(persona1);

persona1.saludar();