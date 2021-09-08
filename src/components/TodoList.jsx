import React from "react";
import deleteIcon from "../assets/images/icon-cross.svg";

const TodoList = ({id, content, completed}) => {
  
  return (
    <>
      <div className="todolist__item" key={id}>
        <div className="todo__check">
          <input type="checkbox" name="check" id={id} />
          <label htmlFor={id}>
            {content}
          </label>
        </div>
        <div className="todolist__delete">
          <img src={deleteIcon} alt="delete" />
        </div>
      </div>
    </>
  );
};

export default TodoList;
