class ToDoList {

    constructor() {

        this.toDoList = [];

    };

    getTodos() {
        
        return this.toDoList;

    };

    addTodo(todo) {

        this.toDoList.push(todo);

    };

    deleteTodo() {

        this.toDoList.pop();

    };

};

const hola = document.createElement('h3');

module.exports = ToDoList;