const arrNumeros: number[] = [1,2,3,4];

const sumar = (arr:number[]): number => {
    let suma = 0;

    for (const num of arr) {
        suma += num;
    };
    return suma;
}

console.log(sumar(arrNumeros));
