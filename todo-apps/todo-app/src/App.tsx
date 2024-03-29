import React, { useState, useRef } from "react";

type FormElemEvent = React.FormEvent<HTMLFormElement>;

interface Task {
  name: string;
  done: boolean;
}

function App(): JSX.Element {
  const [newTask, setNewTask] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>([]);
  const taskInput = useRef<HTMLInputElement>(null);

  function handleSubmit(e: FormElemEvent): void {
    e.preventDefault();
    addTask(newTask);
    setNewTask("");
    taskInput.current?.focus();
  }

  function addTask(name: string): void {
    const newTasks = [...tasks, { name, done: false }];
    setTasks(newTasks);
  }

  function toggleDoneTask(index: number): void {
    const newTasks = [...tasks];
    newTasks[index].done = !newTasks[index].done;
    setTasks(newTasks);
  }

  function removeTask(index: number): void {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  }

  return (
    <div className="container p-4">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-header">
              <h1 className="text-center">TODOs</h1>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  ref={taskInput}
                  className="form-control"
                  required
                  autoFocus
                />
                <button className="btn btn-success btn-block mt-2">Save</button>
              </form>
              {tasks.map((t: Task, index: number) => (
                <div key={index} className="card card-body mt-2">
                  <h2 style={{ textDecoration: t.done ? "line-through" : "" }}>
                    {t.name}
                  </h2>
                  <div>
                    <button
                      onClick={() => toggleDoneTask(index)}
                      className="btn btn-secondary"
                    >
                      {t.done ? "✓" : "✗"}
                    </button>
                    <button
                      onClick={() => removeTask(index)}
                      className="btn btn-danger"
                    >
                      🗑
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
