const nombre: string = "Jorge";

const apellido: string = "Vega";

const edad: number = 32;

console.log(nombre.toUpperCase());

console.log(apellido.toUpperCase());

const alive: boolean = true;

const numPares: number[] = [2, 4, 6, 8, 10];

const palabras: string[] = ["Hola", "Chau", "Jorge"];

const numeros: number[] = [];

numeros.push(10);
numeros.push(5);
numeros.push(0);

let unaVariable: any = "Hola";

unaVariable = 5;
unaVariable = true;

const sumarNumeros = (arr: number[]) => {

    let suma: number = 0;

    for(const num of arr) suma += num;

    return suma;

};

console.log(sumarNumeros(numPares));