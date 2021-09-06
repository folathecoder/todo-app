import React from "react";
import "./styles/App.scss";
import deleteIcon from "./assets/images/icon-cross.svg";

const App = () => {
  return (
    <>
      <main className="container">
        <div className="wrapper">
          <header className="header">
            <div className="header__logo">
              <h1>todo</h1>
            </div>
            <div className="header__theme">
              <button>toggle</button>
            </div>
          </header>

          <section className="todo">
            <form className="todo__form">
              <div className="todo__check">
                <input type="checkbox" disabled={true} />
              </div>
              <div className="todo__input">
                <input
                  type="text"
                  name="text"
                  id="text"
                  className="todo__input"
                  placeholder="Create a new todo.."
                />
              </div>
            </form>
          </section>

          <div className="todolist">
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

            <div className="todolist__menu">
              <div className="todolist__menu-counter">
                <p>5 items left</p>
              </div>
              <div>
                <button className="todolist__clear btn">Clear Completed</button>
              </div>
            </div>
          </div>

          <div className="todolist__menu todolist__main-menu">
            <button className="btn">All</button>
            <button className="btn">Active</button>
            <button className="btn">Completed</button>
          </div>

          <div className="todolist__instruction">
            <p>Drag and drop to reorder list</p>
          </div>
        </div>
      </main>
    </>
  );
};

export default App;
