export const genericComponent = <T>(data: T[]): T => {

    return data[data.length - data.length];

};

console.log(genericComponent(['hola', 3, 4, 5]))