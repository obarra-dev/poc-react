import { fetchTodos } from "../api/todos";
import {
  fetchTodosStart,
  fetchTodosSuccess,
  fetchTodosError,
} from "./todo.slice";
import { AppThunk } from "./store";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Todo } from "./todo.types";

export const getTodos = (): AppThunk => {
  return async (dispatch) => {
    dispatch(fetchTodosStart());
    try {
      await new Promise((resolve) => setInterval(resolve, 3000));
      const response = await fetchTodos();
      dispatch(fetchTodosSuccess(response.data));
    } catch (error) {
      dispatch(fetchTodosError(error as Error));
    }
  };
};

export const getTodosWithCreateAsyncThunk = createAsyncThunk<Todo[], void>(
  "todos/fetchTodos",
  async (_, { rejectWithValue }) => {
    try {
      await new Promise((resolve) => setInterval(resolve, 3000));
      const response = await fetchTodos();
      const data = response.data;
      return data as Todo[];
    } catch (err) {
      return rejectWithValue([] as Todo[]);
    }
  }
);
