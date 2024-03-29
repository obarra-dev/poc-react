export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export interface TodosState {
  items: Todo[];
  loading: boolean;
  errorMessage: string | null;
}
