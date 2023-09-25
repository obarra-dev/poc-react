import {
  ADD_TODO,
  CHECK_TODO,
  DELETE_TODO,
  FETCH_TODOS_START,
  FETCH_TODOS_ERROR,
  FETCH_TODOS_SUCCESS,
  Todo,
} from "./todo.types";

export const addTodo = (text: string) => ({
  type: ADD_TODO,
  payload: text,
});

export const deleteTodo = (id: number) => ({
  type: DELETE_TODO,
  payload: id,
});

export const checkTodo = (id: number) => ({
  type: CHECK_TODO,
  payload: id,
});

export const fetchTodosStart = () => ({
  type: FETCH_TODOS_START,
});

export const fetchTodosSuccess = (todos: Todo[]) => ({
  type: FETCH_TODOS_SUCCESS,
  payload: todos,
});

export const fetchTodosError = (error: Error) => ({
  type: FETCH_TODOS_ERROR,
  payload: error,
});

