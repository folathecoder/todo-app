import React, { useState, useEffect } from "react";
import TodoContainer from "./TodoContainer";
import { data } from "../data/data";

const Todo = () => {
  ////////////////////////////////////////////////////////////
  //TODO: State Management
  const [todo, setTodo] = useState({});
  const [todos, setTodos] = useState(data);

  ////////////////////////////////////////////////////////////

  //TODO: Handle input change event
  const handleChange = (e) => {
    // Extract input from form
    const value = e.target.value;

    // Create a new object for each entry
    const newTodo = {
      id: new Date().getTime().toString(),
      content: value,
      completed: false,
    };

    // Pass the object into the setTodo function
    setTodo(newTodo);
  };

  //TODO: Handle form submit event
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation: Execute code if the input is not empty
    if (todo.content) {
      // Add the new todo object into the todos array (while preserving the previous data)
      setTodos([...todos, todo]);
      // Clear form input
      document.querySelector(".todo__form").reset();
    }
  };

  ////////////////////////////////////////////////////////////
  // //TODO: Extract todos state from localStorage on first load
  useEffect(() => {
    const getLocalTodos = localStorage.getItem("localTodos");
    setTodos(JSON.parse(getLocalTodos));
  }, []);
  
  //TODO: Push todos state to localStorage
  useEffect(() => {
    localStorage.setItem("localTodos", JSON.stringify(todos));
  });

  ////////////////////////////////////////////////////////////

  return (
    <>
      <section className="todo">
        <form className="todo__form" onSubmit={handleSubmit}>
          <div className="todo__check">
            <input type="checkbox" disabled={true} className="todo__input" />
          </div>
          <div className="todo__input-container">
            <input
              type="text"
              name="content"
              id="text"
              className="todo__input-container todo-input"
              placeholder="Create a new todo.."
              onChange={handleChange}
              aria-label="input a new todo"
            />
          </div>
        </form>
      </section>
      <TodoContainer todos={todos} setTodos={setTodos} />
    </>
  );
};

export default Todo;
