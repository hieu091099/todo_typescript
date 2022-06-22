import React, { useState } from "react";
import { Todo } from "../model";
import { AiFillDelete, AiFillEdit, AiOutlineCheck } from "react-icons/ai";
interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);
  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };
  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id != id));
  };
  return (
    <form className="todos__single">
      {edit ? (
        <input
          type="text"
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
          className="todos__single--text"
        />
      ) : todo.isDone ? (
        <s className="todos__single--text">{todo.todo}</s>
      ) : (
        <span className="todos__single--text">{todo.todo}</span>
      )}

      <div className="">
        <span className="icons">
          <AiFillEdit
            size={20}
            style={{ marginRight: 10 }}
            color="#022e19"
            onClick={() => {
              if (!edit && !todo.isDone) {
                setEdit(!edit);
              }
            }}
          />
          <AiFillDelete
            size={20}
            style={{ marginRight: 10 }}
            color="#022e19"
            onClick={() => handleDelete(todo.id)}
          />
          <AiOutlineCheck
            size={20}
            color="#022e19"
            onClick={() => handleDone(todo.id)}
          />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
