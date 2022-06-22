import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import InputFields from "./components/InputFields";
import { Todo } from "./model";
import TodoList from "./components/TodoList";

function App() {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const handleAdd = (e: React.FormEvent) => {
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
      setTodo("");
    }
    e.preventDefault();
  };

  return (
    <div className="app">
      <div className="app-title">Taskify</div>
      <InputFields todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
