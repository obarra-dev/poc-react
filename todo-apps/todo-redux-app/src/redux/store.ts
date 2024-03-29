import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import todos from "./todo.reducer";

const rootReducer = combineReducers({ todos });

const store = createStore(
  rootReducer,
  composeWithDevTools()
);

export default store;
