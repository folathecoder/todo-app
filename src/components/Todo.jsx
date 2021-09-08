import React, { useState, useEffect } from "react";
import TodoContainer from "./TodoContainer";
import { data } from "../data/data";

const Todo = () => {
  const [todos, setTodos] = useState(data);

  return (
    <>
      <section className="todo">
        <form className="todo__form">
          <div className="todo__check">
            <input type="checkbox" disabled={true} className="todo__input" />
          </div>
          <div className="todo__input">
            <input
              type="text"
              name="content"
              id="text"
              className="todo__input"
              placeholder="Create a new todo.."
            />
          </div>
        </form>
      </section>
      <TodoContainer todos={todos} />
    </>
  );
};

export default Todo;
