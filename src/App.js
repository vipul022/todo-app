import React, { useState } from "react";
import Todo from "./components/Todo";
import FinishedTodo from "./components/FinishedTodo";
import Form from "./components/Form";

const App = () => {
  const [todos, setTodos] = useState([]);
  // const [finishedTodos, setFinishedTodos] = useState();

  const finishedTodo = (index) => {
    console.log(todos[index].done);
    // const a = (todos[index] = { done: !done });
    const cloneTodo = [...todos];
    // !below value of done is toggled so that FinishedTodo commponent can be rendered
    cloneTodo[index].done = !cloneTodo[index].done;
    setTodos(cloneTodo);
  };

  const removeTodo = (index) => {
    console.log(index);
    const cloneTodos = [...todos];
    cloneTodos.splice(index, 1);
    setTodos(cloneTodos);
  };
  let currentTodo;
  if (todos) {
    currentTodo = todos.map((todo, index) => {
      if (!todo.done) {
        return (
          <Todo
            key={index}
            index={index}
            todo={todo.value}
            finishedTodo={finishedTodo}
            removeTodo={removeTodo}
          />
        );
      } else {
        console.log("insideFInished");
        return (
          <FinishedTodo
            key={index}
            index={index}
            todo={todo.value}
            finishedTodo={finishedTodo}
            removeTodo={removeTodo}
          />
        );
      }
    });
  }
  // !below we are creating a todo object and setting the state as array of object
  const addTodo = (event) => {
    const todo = { done: false, value: event.target.todo.value };
    event.preventDefault();
    setTodos([...todos, todo]);
  };
  return (
    <div>
      <Form addTodo={addTodo} />
      {currentTodo}
    </div>
  );
};

export default App;

// Create a  todo list.

// Requirements:

// 1. Use React hooks to create the  app.

// 2. Add a delete button to remove a list item. ( refer to dynamic form challenge, refactor the code  to use hooks )

// 3. Add a completed/finished button. When a user clicks the completed/finish button it must strike through the list item.

// 4. Style up the app  with pretty colors.
