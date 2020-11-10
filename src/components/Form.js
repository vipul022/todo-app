import React from "react";

const Form = ({ addTodo }) => {
  const handleSubmit = (event) => {
    addTodo(event);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="todo" placeholder="Enter your todo..." />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
