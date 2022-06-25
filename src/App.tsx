import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import InputFields from "./components/InputFields";
import { Todo } from "./model";
import TodoList from "./components/TodoList";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
function App() {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);
  const handleAdd = (e: React.FormEvent) => {
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
      setTodo("");
    }
    e.preventDefault();
  };
  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.droppableId === source.droppableId
    ) {
      return;
    }
    let add,
      active = todos,
      complete = completedTodos;
    if (source.droppableId == "TodosList") {
      add = active[source.index];
      active.splice(source.index, 1);
    } else {
      add = active[source.index];
      active.splice(source.index, 1);
    }
    if (destination.droppableId == "TodosList") {
      active.splice(destination.index, 0, add);
    } else {
      complete.splice(source.index, 0, add);
    }
    setCompletedTodos(complete);
    setTodos(active);
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="app">
        <div className="app-title">Taskify</div>
        <InputFields todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        <TodoList
          todos={todos}
          setTodos={setTodos}
          completedTodos={completedTodos}
          setCompletedTodos={setCompletedTodos}
        />
      </div>
    </DragDropContext>
  );
}

export default App;
