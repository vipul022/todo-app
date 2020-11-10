import React from "react";

const FinishedTodo = ({ todo, index, finishedTodo, removeTodo }) => {
  const handleRemove = () => {
    removeTodo(index);
  };

  const handleStrike = () => {
    finishedTodo(index);
  };

  return (
    <div>
      <h2 style={{ textDecoration: "line-through" }}>{todo}</h2>
      <button onClick={handleRemove}>Remove</button>
      <button onClick={handleStrike}>Finished</button>
    </div>
  );
};

export default FinishedTodo;
