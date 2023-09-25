import { fetchTodos } from "../api/todos";
import { fetchTodosStart, fetchTodosSuccess, fetchTodosError } from "./todo.slice";
import { AppThunk } from "./store";

export const getTodos = (): AppThunk => {
  return async (dispatch) => {
    dispatch(fetchTodosStart());
    try {
      const response = await fetchTodos();
      dispatch(fetchTodosSuccess(response.data));
    } catch (error) {
      dispatch(fetchTodosError(error as Error));
    }
  };
};
