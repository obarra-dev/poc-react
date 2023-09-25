import { ThunkActionDispatch } from "redux-thunk";
import { fetchTodosStart, fetchTodosSuccess, fetchTodosError } from "./todo.actions";
import { fetchTodos } from "../api/todos";


export const getTodos = () => {
  return async (dispatch: ThunkActionDispatch<any>) => {
    dispatch(fetchTodosStart());
    try {
      const response = await fetchTodos();
      dispatch(fetchTodosSuccess(response.data));
    } catch (error) {
      dispatch(fetchTodosError(error as Error));
    }
  };
};
