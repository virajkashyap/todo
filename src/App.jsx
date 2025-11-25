import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Fotter from "./components/Fotter";
import FormTodo from "./components/TodoForm";
import TodoList from "./components/Todolist";

function App() {
  return (
    <>
      <Header />
      <hr />
      <FormTodo />
      {/* <TodoList /> */}
      <Fotter />
    </>
  );
}

export default App;
