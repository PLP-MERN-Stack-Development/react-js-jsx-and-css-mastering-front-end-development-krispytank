import React, { useState } from 'react';

// Using objects for tasks makes them easier to manage, especially for deletion.
// Each task will have a unique `id` and its `text`.
function TaskManager() {
  const [tasks, setTasks] = useState([]);
  // State to hold the value of the new task input field
  const [newTaskText, setNewTaskText] = useState("");

  /**
   * Adds a new task to the list.
   */
  const addTask = () => {
    // Trim whitespace and check if the task text is not empty
    const trimmedText = newTaskText.trim();
    if (trimmedText) {
      const newTask = {
        id: Date.now(), // Use a simple unique ID (timestamp)
        text: trimmedText,
      };
      // Add the new task object to the state
      setTasks([...tasks, newTask]);
      // Clear the input field after adding
      setNewTaskText("");
    }
  };

  /**
   * Deletes a task by its unique ID.
   * @param {number} idToDelete - The id of the task to be deleted.
   */
  const deleteTask = (idToDelete) => {
    // Filter out the task with the matching id
    setTasks(tasks.filter((task) => task.id !== idToDelete));
  };

  /**
   * Handles the Enter key press in the input field to add a task.
   * @param {React.KeyboardEvent<HTMLInputElement>} event - The keyboard event.
   */
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      addTask();
    }
  };

  return (
    // Center the component and give it a max width for better appearance
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Task Manager</h2>
      <div className="flex flex-col items-center">
        {/* Input group for adding new tasks */}
        <div className="flex w-full mb-4">
          <input
            type="text "
            placeholder="Add a new task..."
            className="flex-grow text-black border border-gray-300 rounded-l-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            // Controlled component: value is tied to state
            value={newTaskText}
            // Update state on every change
            onChange={(e) => setNewTaskText(e.target.value)}
            // Allow adding with Enter key
            onKeyDown={handleKeyDown}
          />
          <button
            className="bg-blue-600 text-black px-6 py-3 rounded-r-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
            // Add the task from state
            onClick={addTask}
          >
            Add
          </button>
        </div>
      </div>

      {/* List of tasks */}
      <ul className="mt-4 space-y-2">
        {tasks.length > 0 ? (
          tasks.map((task) => (
            // Use the unique task.id as the key
            <li
              key={task.id}
              className="flex items-center justify-between border border-gray-200 p-3 rounded-lg bg-gray-50"
            >
              {/* Display the task text */}
              <span className="text-gray-700">{task.text}</span>
              {/* Button to delete this specific task */}
              <button
                className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 transition-colors text-sm"
                onClick={() => deleteTask(task.id)}
              >
                Delete
              </button>
            </li>
          ))
        ) : (
          // Show a message when there are no tasks
          <li className="text-center text-gray-500 p-3">No tasks yet.</li>
        )}
      </ul>
    </div>
  );
}

export default TaskManager;
