const sumar = require("./funcion");

test("sumar 1 + 2 debe ser igual a 3", () => {

    expect(sumar(1, 2)).toBe(3);

});