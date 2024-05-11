class Persona {

    constructor(nombre, edad) {

        this.nombre = nombre;
        this.edad = edad;
        this.amigos = [];
        this.sentado = true;

    };

    agregarAmigo(nombreAmigo) {

        this.amigos.push(nombreAmigo);

    };

    pararse() {

        this.sentado = false;

    };

    sentarse() {

        this.sentado = true;

    };

};

class Doctor extends Persona {

    constructor(nombre, edad, nMatricula) {

        super(nombre, edad);

        this.nMatricula = nMatricula;

    };

};

const doctor1 = new Doctor('Chapatin', 50, 59394);

console.log(doctor1);

doctor1.agregarAmigo('Pedro');

console.log(doctor1);