const procesarDatos = require("./funcion.integracion");

test("procesarDatos debe obtener y procesar los datos de la api", async () => {

    // Mock de fetch
    global.fetch = jest.fn(() => 
        
        Promise.resolve({
            json: () => Promise.resolve({
                dato: "valor",
            }),
        })

    );

    const datos = await procesarDatos();

    expect(datos).toEqual({
        dato: "valor",
    });

});