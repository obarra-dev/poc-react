import { fetchTodos } from "../api/todos";
import {
  fetchTodosStart,
  fetchTodosSuccess,
  fetchTodosError,
} from "./todo.slice";
import { AppThunk } from "./store";
import { createAsyncThunk } from "@reduxjs/toolkit";

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

export const getTodosWithCreateAsyncThunk = createAsyncThunk(
  "todos/fetchTodos",
  async (_, { rejectWithValue }) => {
    try {
      await new Promise((resolve) => setInterval(resolve, 3000));
      const response = await fetchTodos();
      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
