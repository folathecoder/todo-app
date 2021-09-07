import React from "react";
import "./styles/App.scss";
import Header from './components/Header';
import TodoInput from "./components/TodoInput";
import TodoContainer from "./components/TodoContainer";
import TodoBanner  from "./components/TodoBanner";

const App = () => {
  return (
    <>
      <main className="container">
        <div className="wrapper">
          <Header />
          <TodoInput />
          <TodoContainer />
          <TodoBanner />
        </div>
      </main>
    </>
  );
};
export default App;
