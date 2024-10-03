const getItems = () => {

    // Realmente aca vamos a buscar datos a una BDD

    return [
        {name: "Producto A", price: 10, quantity: 2},
        {name: "Producto B", price: 5, quantity: 3},
    ];

};

module.exports = {
    getItems,
};