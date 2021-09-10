import React from "react";
import "./styles/App.scss";
import Header from './components/Header';
import Todo from "./components/Todo";
import TodoBanner  from "./components/TodoBanner";


const App = () => {
  return (
    <>
      <main className="container">
        <div className="wrapper">
          <Header />
          <Todo />
          <TodoBanner />
        </div>
      </main>
    </>
  );
};

export default App;