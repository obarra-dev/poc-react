import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TodosState } from "../redux/todo.types";
import { TodoItem } from "./TodoItem";
import { fetchTodosStart, fetchTodosSuccess, fetchTodosError } from "../redux/todo.actions";
import { fetchTodos } from "../api/todos";


export function TodoList() {
  const loading = useSelector(
    (state: { todos: TodosState }) => state.todos.loading
  );
  const todos = useSelector(
    (state: { todos: TodosState }) => state.todos.items
  );

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchTodosStart());
    fetchTodos()
    .then(response => dispatch(fetchTodosSuccess(response.data)))
    .catch(error => dispatch(fetchTodosError(error as Error)))

  }, [dispatch]);

  if (loading) {
    return (
      <div className="spinner">
        <i className="fa fa-spinner fa-spin fa-4x"></i>
      </div>
    );
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
