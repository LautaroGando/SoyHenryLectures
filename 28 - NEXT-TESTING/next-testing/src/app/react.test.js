import {render, screen, fireEvent} from "@testing-library/react";
import {App} from "./page";

test("completo flujo de usuario en la aplicación", () => {

    render(<App />);

    fireEvent.click(screen.getByText("Abrir menú"));

    expect(screen.getByText("Opción 1")).toBeInTheDocument();

});