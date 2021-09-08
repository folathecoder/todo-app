import React from 'react'

const TodoInput = () => {
    return (
      <>
        <section className="todo">
          <form className="todo__form">
            <div className="todo__check">
              <input type="checkbox" disabled={true} className="todo__input"/>
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
      </>
    );
}

export default TodoInput
