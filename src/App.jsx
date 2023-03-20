import React from "react";
import { AddTodo } from "./components/AddTodo";
import { TodoLists } from "./components/TodoList";

const App = () => {
  return (
    <div className="container p-4 mt-2">
      <h2>Todo Application</h2>
      <AddTodo />
      <TodoLists />
    </div>
  );
};

export default App;
