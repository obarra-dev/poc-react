import axios from "axios";

// export const fetchTodos = () => axios("http://localhost:3006/todos");

export function fetchTodos() {
    return axios("data/todosXX.json")   
};
