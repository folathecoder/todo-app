import React, { useEffect } from "react";
import TodoList from "./TodoList";

const TodoContainer = (props) => {
  const { todos, setTodos } = props;
  const todoCount = todos.length;
  const itemText = todoCount < 2 ? `item` : `items`;

  //TODO: Handle: Delete all completed tasks onClick
  const handleClearCompleted = () => {
    const updatedTodos = todos.filter((todo) => todo.completed === false);
    setTodos(updatedTodos);
  };

  //TODO: Reusable function that helps to filter todos by taking the class name as an argument
  const filterTodos = (className) => {
    document.querySelectorAll(".todolist__item").forEach((todoItem) => {
      if (!todoItem.classList.contains(className)) {
        todoItem.closest(".todolist__item").style.display = "none";
      } else {
        todoItem.closest(".todolist__item").style.display = "flex";
      }
    });
  };

  //TODO: Handle: Display all todos (Active + Completed)
  const handleDisplayAll = () => {
    document.querySelectorAll(".todolist__item").forEach((todoItem) => {
      if (
        todoItem.classList.contains("completed") ||
        todoItem.classList.contains("active")
      ) {
        todoItem.closest(".todolist__item").style.display = "flex";
      }
    });
  };

  //TODO: Handle: Display only active todos
  const handleDisplayActive = () => {
    filterTodos("active");
  };

  //TODO: Handle: Display only completed todos
  const handleDisplayCompleted = (e) => {
    filterTodos("completed");
  };

  //TODO: Add && Update notification
  useEffect(() => {
    if (todoCount > 0) {
      const notification = todoCount > 1 ? `Todos` : `Todo`;
      document.title = `${notification} (${todoCount})`;
    }
  });

  //TODO: Add active class to clicked button
  useEffect(() => {
    const buttons = document.querySelectorAll(".btn");
    const wrapper = document.querySelector(".wrapper");

    wrapper.addEventListener("click", function (e) {
      // Capture the element
      if (e.target.closest(".btn")) {
        const clicked = e.target.closest(".btn");

        // Remove active class on buttons
        buttons.forEach((btn) => {
          btn.classList.remove("active-btn");
        });

        // Add active class to clicked button
        clicked.classList.add("active-btn");
      }
    });
  });

  return (
    <>
      {/* Todo List Component */}
      <section className="todolist">
        {/* Todo Item Component */}

        {todos.map((todo) => {
          return <TodoList {...todo} todos={todos} setTodos={setTodos} />;
        })}

        {/* Mobile Only */}
        <div className="todolist__menu mobile-only">
          <div className="todolist__menu-counter">
            <p>
              {todoCount} {itemText} left
            </p>
          </div>
          <div>
            <button
              className="todolist__clear btn"
              onClick={handleClearCompleted}
            >
              Clear Completed
            </button>
          </div>
        </div>
        {/* Desktop Only */}
        <div className="todolist__menu desktop-only">
          <div className="todolist__menu-counter">
            <p>
              {todoCount} {itemText} left
            </p>
          </div>
          <button className="btn" onClick={handleDisplayAll}>
            All
          </button>
          <button className="btn" onClick={handleDisplayActive}>
            Active
          </button>
          <button className="btn" onClick={handleDisplayCompleted}>
            Completed
          </button>
          <button className="todolist__clear btn">Clear Completed</button>
        </div>
      </section>

      <div className="todolist__menu todolist__main-menu mobile-only">
        <button className="btn" onClick={handleDisplayAll}>
          All
        </button>
        <button className="btn" onClick={handleDisplayActive}>
          Active
        </button>
        <button
          className="btn"
          onClick={handleDisplayCompleted}
        >
          Completed
        </button>
      </div>
    </>
  );
};

export default TodoContainer;
