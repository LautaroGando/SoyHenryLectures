import { render, fireEvent, screen } from "@testing-library/react";
import ListaDeTareas from "./ListaDeTareas";

test("Probando funcionalidad de agregar una tarea en el componente ListaDeTareas", () => {

    render(<ListaDeTareas />);

    fireEvent.change(screen.getByPlaceholderText("Añade una nueva tarea aquí"), {
        target: {
            value: "Aprender Jest",
        },
    });

    fireEvent.click(screen.getByText("Agregar"));

    expect(screen.getByText("Aprender Jest")).toBeInTheDocument();

});

test("Probando funcionalidad de completado en el componente ListaDeTareas", () => {

    render(<ListaDeTareas />);

    fireEvent.click(screen.getByLabelText("Marcar Aprender Jest como completada"));

    expect(screen.getByText("Aprender Jest")).toHaveClass("tarea-completada");

});

test("Probando funcionalidad de eliminar en el componente ListaDeTareas", () => {

    render(<ListaDeTareas />);

    fireEvent.click(screen.getByLabelText("Eliminar Aprender Jest"));

    expect(screen.queryByText("Aprender Jest")).not.toBeInTheDocument();

});