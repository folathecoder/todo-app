import React from "react";
import deleteIcon from "../assets/images/icon-cross.svg";

const TodoContainer = () => {
  return (
    <>
      {/* Todo List Component */}
      <section className="todolist">
        {/* Todo Item Component */}
        <div className="todolist__item">
          <div className="todo__check">
            <input type="checkbox" name="check" id="check" />
          </div>
          <div className="todolist__item-content">
            <p>Lorem ipsum dolor sit amet</p>
          </div>
          <div className="todolist__delete">
            <img src={deleteIcon} />
          </div>
        </div>

        {/* Mobile Only */}
        <div className="todolist__menu mobile-only">
          <div className="todolist__menu-counter">
            <p>5 items left</p>
          </div>
          <div>
            <button className="todolist__clear btn">Clear Completed</button>
          </div>
        </div>
        {/* Desktop Only */}
        <div className="todolist__menu desktop-only">
          <div className="todolist__menu-counter">
            <p>5 items left</p>
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
