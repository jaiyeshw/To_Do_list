import React, { useEffect, useMemo, useState } from "react";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api/tasks";

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const completedCount = useMemo(
    () => tasks.filter((task) => task.completed).length,
    [tasks]
  );

  async function loadTasks() {
    try {
      setLoading(true);
      const response = await fetch(API_URL);
      const data = await response.json();
      setTasks(data);
      setError("");
    } catch (err) {
      setError("Could not load tasks. Check if the server is running.");
    } finally {
      setLoading(false);
    }
  }

  async function addTask(event) {
    event.preventDefault();

    const cleanTask = taskText.trim();

    if (!cleanTask) {
      setError("Please enter a task first.");
      return;
    }

    try {
      setSaving(true);
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ text: cleanTask })
      });

      const newTask = await response.json();
      setTasks((currentTasks) => [newTask, ...currentTasks]);
      setTaskText("");
      setError("");
    } catch (err) {
      setError("Could not add task.");
    } finally {
      setSaving(false);
    }
  }

  async function completeTask(id) {
    try {
      const response = await fetch(`${API_URL}/${id}/complete`, {
        method: "PATCH"
      });
      const updatedTask = await response.json();

      setTasks((currentTasks) =>
        currentTasks.map((task) => (task._id === id ? updatedTask : task))
      );
    } catch (err) {
      setError("Could not mark task as complete.");
    }
  }

  async function deleteTask(id) {
    try {
      await fetch(`${API_URL}/${id}`, {
        method: "DELETE"
      });

      setTasks((currentTasks) => currentTasks.filter((task) => task._id !== id));
    } catch (err) {
      setError("Could not delete task.");
    }
  }

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <main className="page-shell">
      <section className="workspace">
        <div className="intro-panel">
          <p className="eyebrow">Daily planner</p>
          <h1>To-Do List</h1>
          <p className="intro-copy">
            A clean task board for adding, finishing, and removing your daily work.
          </p>

          <div className="stats-grid">
            <div>
              <span>{tasks.length}</span>
              <p>Total tasks</p>
            </div>
            <div>
              <span>{completedCount}</span>
              <p>Completed</p>
            </div>
          </div>
        </div>

        <div className="task-panel">
          <form className="task-form" onSubmit={addTask}>
            <input
              value={taskText}
              onChange={(event) => setTaskText(event.target.value)}
              placeholder="Add a new task..."
            />
            <button type="submit" disabled={saving}>
              {saving ? "Adding" : "Add"}
            </button>
          </form>

          {error && <p className="error-message">{error}</p>}

          <div className="task-list">
            {loading && <p className="empty-state">Loading tasks...</p>}

            {!loading && tasks.length === 0 && (
              <p className="empty-state">No tasks yet. Add your first one above.</p>
            )}

            {!loading &&
              tasks.map((task) => (
                <article
                  className={`task-item ${task.completed ? "completed" : ""}`}
                  key={task._id}
                >
                  <button
                    className="status-button"
                    onClick={() => completeTask(task._id)}
                    disabled={task.completed}
                    title="Mark complete"
                  >
                    {task.completed ? "✓" : ""}
                  </button>

                  <p>{task.text}</p>

                  <button
                    className="delete-button"
                    onClick={() => deleteTask(task._id)}
                    title="Delete task"
                  >
                    Delete
                  </button>
                </article>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
