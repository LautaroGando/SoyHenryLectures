/* const sumar = (a, b) => {

    if(typeof a != "number" || typeof b != "number") return null;

    const suma = a + b;

    return suma;

};

const calcularTotal = (items) => {

    if(!items.length) throw Error("Factura Invalida");

    let total = 0;

    for(let item of items) total += item.quantity * item.price;

    return total;

};

module.exports = {
    sumar,
    calcularTotal,
}; */

const {getItems} = require("./dataBase");

const calcularTotal = (getItems) => {

    const items = getItems();

    let total = 0;

    for(const item of items) total += item.quantity * item.price;

    return total;

};

console.log(calcularTotal(getItems));

module.exports = calcularTotal;