import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "../page";

global.fetch = jest.fn(() =>

    Promise.resolve({
        json: () => Promise.resolve({ nombreCompleto: "Lautaro Gando" }),
    }),

);

test("Flujo de formulario y vista previa con carga de datos desde una API", async () => {

    render(<App />);

    fireEvent.change(screen.getByPlaceholderText("Nombre"), {
        target: {
            value: "Lautaro",
        },
    });

    fireEvent.change(screen.getByPlaceholderText("Email"), {
        target: {
            value: "lau@gmail.com",
        },
    });

    fireEvent.click(screen.getByText("Enviar"));

    await waitFor(() => screen.getByText("Lautaro Gando"));

    expect(screen.getByText("Lautaro Gando")).toByInTheDocument();
    expect(screen.getByText("Email: lau@gmail.com")).toByInTheDocument();

    afterEach(() => {
        
        jest.clearAllMocks();

    });

});