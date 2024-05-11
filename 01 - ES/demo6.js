function sumar(...numeros) {
    
    console.log(numeros);

    let suma= 0;

    for (let i = 0; i < numeros.length; i++) {
        
        suma += numeros[i];
        
    };

    return suma;

};

console.log(sumar(5, 9, 3));

console.log(sumar(5, 9));

console.log(sumar(5, 9, 3, 8, 4, 6, 10));