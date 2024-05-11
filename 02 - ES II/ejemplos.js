const suma = (a, b) => {
    
    return a + b;

};

console.log(suma(4, 7));

/* ----------------------------------------------------------- */

const arr = ['🐣', '🐢', '🥷'];

arr.forEach(function (elemento) {

    return console.log(elemento);

});

arr.forEach((elemento) => elemento);

/* ----------------------------------------------------------- */

class CajaFuerte {

    constructor() {

        this._dinero = 0;

    };

    depositar(cantidad) {this._dinero += cantidad};

    retirar(cantidad) {

        if(cantidad <= this._dinero) {

            this._dinero -= cantidad;

            return cantidad;

        };

        return 0;

    };

};

let miCajaFuerte = new CajaFuerte();

miCajaFuerte.depositar(3000);

miCajaFuerte.retirar(2000);

console.log(miCajaFuerte._dinero);

/* ----------------------------------------------------------- */

class Padre {

    caminar() {

        console.log('Caminando...');

    };

};

class Hijo extends Padre {



};

let hijo = new Hijo();

hijo.caminar();

/* ----------------------------------------------------------- */

class Forma {

    dibujar() {
        
        console.log('Dibujando una forma generica');

    };

};

class Circulo extends Forma {

    dibujar() {

        console.log('Dibujando un circulo');

    };

};

class Cuadrado extends Forma {

    dibujar() {

        console.log('Dibujando un cuadrado');

    };

};

let dibujarGenerico = new Forma();
let dibujarCirculo = new Circulo();
let dibujarCuadrado = new Cuadrado();

console.log(dibujarGenerico.dibujar(), dibujarCuadrado.dibujar(), dibujarCirculo.dibujar());

/* ----------------------------------------------------------- */

class Coche {

    constructor() {

        this._motorEncendido = false;

    };

    _encenderMotor() {

        this._motorEncendido = true;

        console.log('Motor encendido');

    };

    _apagarMotor() {

        this._motorEncendido = false;

        console.log('Motor apagado');

    };

};

let miCoche = new Coche();

console.log(miCoche._encenderMotor());

/* ----------------------------------------------------------- */

class SuperHeroe {

    constructor(nombre, identidad, superpoder) {

        this.nombre = nombre;
        this.superpoder = superpoder;
        this.identidad = identidad;

    };

    volar() {

        console.log(`Mi nombre es: ${this.nombre}`);

    };

};

let superman = new SuperHeroe('Superman', 'Clark Ken', ['Volar', 'Fuerza']);

console.log(superman.volar());

/* ----------------------------------------------------------- */

