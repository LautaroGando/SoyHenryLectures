/* describe("Este es mi primer grupo de tests", () => {

    it("El numero 2 deber ser igual al numero 2", () => {

        expect(2).toEqual(2);

    });

});

const sumar = (a, b) => a + b;

describe("La funcion sumar", () => {

    it("Debe estar definida", () => {

        expect(sumar).toBeDefined();

    });

    it("Debe sumar 2 numeros enviados como argumentos", () => {

        expect(sumar(2, 2)).toBe(4);
        expect(sumar(4, 4)).toBe(8);
        expect(sumar(5, 0)).toBe(5);

    });

}); */

/* const filtrar = (arr) => arr.filter(num => num % 2 == 0);

describe("La funcion filtrar", () => {

    it("Debe estar definida", () => {

        expect(filtrar).toBeDefined();

    });

    it("Debe retornar un array", () => {

        expect(Array.isArray(filtrar([1, 2, 3, 4, 5, 6]))).toBe(true);

    });

    it("Debe retornar un array con los numeros pares", () => {

        expect(filtrar([1, 2, 3, 4])).toEqual(filtrar([2, 4]));
        expect(filtrar([2, 4, 6])).toEqual(filtrar([2, 4, 6]));
        expect(filtrar([1, 3, 5, 7, 9])).toEqual(filtrar([]));
        expect(filtrar([])).toEqual(filtrar([]));

    });

}); */

// toBe - toEqual

/* describe("Una prueba con objetos", () => {

    it("Yo espero que dos iguales sean iguales", () => {

        expect(5).toBe(5);
        expect(10).toBe(10);

    });

    it ("Yo espero que dos palabras iguales sean iguales", () => {

        expect("Jorge").toBe("Jorge");
        expect("Alejo").toBe("Alejo");

    });

    it("Yo espero que dos objetos sean iguales", () => {

        expect({nombre: "Jorge"}).toEqual({nombre: "Jorge"});

    });

    it("Espero que dos arrays iguales sean iguales", () => {

        expect([1, 2, 3]).toEqual([1, 2, 3]);

    });

}); */

// toBeDefined - toBeUndefined

// toContain

// ToDo List

// - Debe ser una clase
// - Debe tener los metodos:
//   - getTodos(): Debe retornar la lista de tareas
//   - addTodo(): Deberia pushear al array una tarea nueva
//   - deleteTodo(): Deberia eliminar la ultima tarea

const ToDoList = require("../scripts/index");

describe("La clase ToDoList", () => {

    it("Debe ser una clase", () => {

        expect(typeof ToDoList.prototype.constructor).toBe("function");

    });

    it("Debe tener el metodo getTodos()", () => {

        const lista = new ToDoList();

        expect(lista.getTodos).toBeDefined();

    });

    it("Debe tener el metodo addTodo()", () => {

        const lista = new ToDoList();

        expect(lista.addTodo).toBeDefined();

    });

    it("Debe tener el metodo deleteTodo()", () => {

        const lista = new ToDoList();

        expect(lista.deleteTodo).toBeDefined();

    });

    it("El metodo getTodos() debe retornar un array", () => {

        const lista = new ToDoList();

        expect(Array.isArray(lista.getTodos())).toBeTrue();

    });

    it("El metodo addTodo() debe agregar un nuevo elemento", () => {

        const lista = new ToDoList();

        lista.addTodo("Hacer la HW de la clase de hoy");

        expect(lista.getTodos()).toContain("Hacer la HW de la clase de hoy");

    });

    it("El metodo deleteTodo() debe eliminar la ultima tarea", () => {

        const lista = new ToDoList();

        lista.addTodo("A");
        lista.addTodo("B");
        lista.addTodo("C");

        lista.deleteTodo();

        expect(lista.getTodos()).toContain("A");
        expect(lista.getTodos()).toContain("B");
        expect(lista.getTodos()).not.toContain("C");

    });

});