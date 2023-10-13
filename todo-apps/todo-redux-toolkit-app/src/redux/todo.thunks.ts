import { fetchTodos } from "../api/todos";
import {
  fetchTodosStart,
  fetchTodosSuccess,
  fetchTodosError,
} from "./todo.slice";
import { AppThunk } from "./store";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Todo } from "./todo.types";
import { AxiosError } from "axios";

export const getTodos = (): AppThunk => {
  return async (dispatch) => {
    dispatch(fetchTodosStart());
    try {
      await new Promise((resolve) => setInterval(resolve, 3000));
      const response = await fetchTodos();
      dispatch(fetchTodosSuccess(response.data));
    } catch (err) {
     dispatch(fetchTodosError(err as Error));
    }
  };
};

function checkIsAxiosError(error: unknown): error is AxiosError {
  return (error as AxiosError).isAxiosError !== undefined
}

export const getTodosWithCreateAsyncThunk = createAsyncThunk<Todo[], void>(
  "todos/fetchTodos",
  async (_, { rejectWithValue }) => {
    try {
      await new Promise((resolve) => setInterval(resolve, 3000));
      const response = await fetchTodos();
      const data = response.data;
      return data as Todo[];
    } catch (err) {
      if (checkIsAxiosError(err)) {
        // get custom message from backend
        if (err.response && err.response.data) {
          return rejectWithValue(err.response.data)
        }
      }
      
      throw err
    }
  }
);
