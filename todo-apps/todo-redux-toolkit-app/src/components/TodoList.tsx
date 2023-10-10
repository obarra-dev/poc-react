import { useEffect } from "react";
import { getTodos, getTodosWithCreateAsyncThunk } from "../redux/todo.thunks";

import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { TodoItem } from "./TodoItem";

export function TodoList() {
  const loading = useAppSelector((state) => state.todos.loading);
  const todos = useAppSelector((state) => state.todos.items);
  const error = useAppSelector((state) => state.todos.error);

  console.log("render")

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTodos());
   // dispatch(getTodosWithCreateAsyncThunk())
  }, [dispatch]);

  if (loading) {
    return (
      <div className="spinner">
        <i className="fa fa-spinner fa-spin fa-4x">Loading...</i>
      </div>
    );
  }

  if (error) {
    return (
      <div>Error...</div>
    )
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
