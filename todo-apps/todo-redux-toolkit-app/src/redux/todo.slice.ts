import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getMaxTodoId } from "../utils";
import { Todo, TodosState } from "./todo.types";

const initialState: TodosState = {
  items: [],
  loading: false,
  error: null,
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
        error: null,
        items: [],
      };
    },
    fetchTodosSuccess(state, action: PayloadAction<Todo[]>) {
      return {
        ...state,
        loading: false,
        error: null,
        items: action.payload,
      };
    },
    fetchTodosError(state, action: PayloadAction<Error>) {
      return {
        ...state,
        loading: false,
        error: action.payload,
        items: [],
      };
    },
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
