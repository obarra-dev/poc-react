import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getMaxTodoId } from "../utils";
import { Todo, TodosState } from "./todo.types";
import { getTodosWithCreateAsyncThunk } from "./todo.thunks";

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
  extraReducers(builder) {
    builder
        .addCase(getTodosWithCreateAsyncThunk.pending, (state) => {
            state.loading = true,
            state.error = null,
            state.items =[]
        })
        .addCase(getTodosWithCreateAsyncThunk.fulfilled, (state, action: PayloadAction<Todo[]>) => {
          state.loading = false,
          state.error = null,
          state.items = action.payload
        })
        .addCase(getTodosWithCreateAsyncThunk.rejected, (state, action) => {
          state.loading = false,
          state.error = new Error(action.payload as string), 
          state.items =[]
        })
}
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
