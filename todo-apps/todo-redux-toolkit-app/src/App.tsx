import { AddTodoForm } from "./components/AddTodoForm";
import { TodoList } from "./components/TodoList";

function App() {
  return (
    <>
      <h1 className="title">Tasks:</h1>
      <main className="todos-section">
        <AddTodoForm />
        <TodoList />
      </main>
    </>
  );
}

export default App;

