import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getMaxTodoId } from "../utils";
import { Todo, TodosState } from "./todo.types";
import { getTodosWithCreateAsyncThunk } from "./todo.thunks";

const initialState: TodosState = {
  items: [],
  loading: false,
  errorMessage: null,
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<string>) {
      state.items.push({
        text: action.payload,
        completed: false,
        id: getMaxTodoId(state.items) + 1,
      });
    },
    deleteTodo(state, action: PayloadAction<number>) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    checkTodo(state, action: PayloadAction<number>) {
      return {
        ...state,
        items: state.items.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    },
    fetchTodosStart(state) {
      return {
        ...state,
        loading: true,
        errorMessage: null,
        items: [],
      };
    },
    fetchTodosSuccess(state, action: PayloadAction<Todo[]>) {
      return {
        ...state,
        loading: false,
        errorMessage: null,
        items: action.payload,
      };
    },
    fetchTodosError(state, action: PayloadAction<Error>) {
      return {
        ...state,
        loading: false,
        errorMessage: action.payload.message,
        items: [],
      };
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getTodosWithCreateAsyncThunk.pending, (state) => {
        (state.loading = true), (state.errorMessage = null), (state.items = []);
      })
      .addCase(getTodosWithCreateAsyncThunk.fulfilled, (state, action) => {
        (state.loading = false),
          (state.errorMessage = null),
          (state.items = action.payload);
      })
      .addCase(getTodosWithCreateAsyncThunk.rejected, (state, action) => {
        if (action.payload) {
          // here action.payload is unkonwn, how can I define a string?
          state.errorMessage = `API frendly error: ${action.payload}`;
        } else if (action.error.message) {
          state.errorMessage = `Technical error: ${action.error.message}`;
        } else {
          state.errorMessage = "Generic error";
        }
        (state.loading = false), (state.items = []);
      });
  },
});

export const {
  addTodo,
  checkTodo,
  deleteTodo,
  fetchTodosError,
  fetchTodosStart,
  fetchTodosSuccess,
} = todoSlice.actions;

export default todoSlice.reducer;
