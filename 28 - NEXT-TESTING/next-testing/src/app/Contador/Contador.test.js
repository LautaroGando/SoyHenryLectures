import { render, screen, fireEvent } from "@testing-library/react";
import Contador from "./Contador";

test('Incrementa el conteo cuando el botón es presionado', () => {
  
    render(<Contador inicio={0} paso={1} />)

    fireEvent.click(screen.getByText('Incrementar'));

    expect(screen.getByText('Conteo: 1')).toBeInTheDocument();

});

test('No incrementa el conteo si el contador está deshabilitado', () => {
  
    render(<Contador inicio={0} paso={1} />)

    fireEvent.click(screen.getByText('Deshabilitar'));
    fireEvent.click(screen.getByText('Incrementar'));

    expect(screen.getByText('Conteo: 0')).toBeInTheDocument();

});

test('Utiliza las props inicio y paso correctamente', () => {
  
    render(<Contador inicio={5} paso={5} />)

    expect(screen.getByText('Conteo: 5')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Incrementar'));

    expect(screen.getByText('Conteo: 10')).toBeInTheDocument();

});