import React from "react";
import "./styles/App.scss";
import check from "./assets/images/icon-check.svg";

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
                <p>Walk mmy dog in the park</p>
              </div>
            </div>

            <div className="todolist__item">
              <div className="todo__check">
                <input type="checkbox" name="check" id="check" />
              </div>
              <div className="todolist__item-content">
                <p>Walk mmy dog in the park</p>
              </div>
            </div>

            <div className="todolist__item">
              <div className="todo__check">
                <input type="checkbox" name="check" id="check" />
              </div>
              <div className="todolist__item-content">
                <p>Walk mmy dog in the park</p>
              </div>
            </div>

            <div className="todolist__item">
              <div className="todo__check">
                <input type="checkbox" name="check" id="check" />
              </div>
              <div className="todolist__item-content">
                <p>Walk mmy dog in the park</p>
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
        </div>
      </main>
    </>
  );
};

export default App;
