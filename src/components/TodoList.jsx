import React from "react";
import deleteIcon from "../assets/images/icon-cross.svg";

const TodoList = ({ id, content, completed, todos, setTodos }) => {
  const handleDelete = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const handleCompleted = (id) => {
    const updateCompleted = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });

    setTodos(updateCompleted);
  };

  return (
    <>
      <div
        className={
          completed === true
            ? `todolist__item completed`
            : `todolist__item active`
        }
        key={id}
      >
        <div className="todo__check">
          <input
            type="checkbox"
            name="check"
            id={id}
            onChange={() => {
              handleCompleted(id);
            }}
          />
          <label htmlFor={id}>
            {content}
          </label>
        </div>
        <div className="todolist__delete">
          <img
            src={deleteIcon}
            alt="delete"
            onClick={() => {
              handleDelete(id);
            }}
          />
        </div>
      </div>
    </>
  );
};

export default TodoList;
