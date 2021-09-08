import React from "react";
import TodoList from "./TodoList";

const TodoContainer = (props) => {
  const { todos, setTodos } = props;
  const todoCount = todos.length;
  const itemText = todoCount < 2 ? `item` : `items`;

  return (
    <>
      {/* Todo List Component */}
      <section className="todolist">
        {/* Todo Item Component */}

        {todos.map((todo) => {
          const { id, content, completed } = todo;
          return <TodoList {...todo} todos={todos} setTodos={setTodos}/>;
        })}

        {/* Mobile Only */}
        <div className="todolist__menu mobile-only">
          <div className="todolist__menu-counter">
            <p>
              {todoCount} {itemText} left
            </p>
          </div>
          <div>
            <button className="todolist__clear btn">Clear Completed</button>
          </div>
        </div>
        {/* Desktop Only */}
        <div className="todolist__menu desktop-only">
          <div className="todolist__menu-counter">
            <p>
              {todoCount} {itemText} left
            </p>
          </div>
          <button className="btn">All</button>
          <button className="btn">Active</button>
          <button className="btn">Completed</button>
          <button className="todolist__clear btn">Clear Completed</button>
        </div>
      </section>

      <div className="todolist__menu todolist__main-menu mobile-only">
        <button className="btn">All</button>
        <button className="btn">Active</button>
        <button className="btn">Completed</button>
      </div>
    </>
  );
};

export default TodoContainer;
