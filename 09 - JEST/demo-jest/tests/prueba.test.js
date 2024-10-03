const {calcularTotal} = require("../index");

// Quiero asegurarme de que cuando calcularTotal se ejecuta, la cb que le envio se ejecuta tambien.

const mockGetItems = jest.fn(() => {

    return [
        {name: "Producto A", price: 10, quantity: 2},
        {name: "Producto B", price: 5, quantity: 3},
    ];

});

describe("En la funcion calcularTotal", () => {

    it("La funcion 'getItems' que paso como parametro debe ejecutarse al menos una vez", () => {

        calcularTotal(mockGetItems);

        expect(mockGetItems).toHaveBeenCalled();

    });

});