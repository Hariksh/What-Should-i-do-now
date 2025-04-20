import React from "react";
import { getTaskSuggestions } from "../utils/taskHelper";

const TaskSuggestions = ({ mood, energy, time }) => {
  const tasks = getTaskSuggestions(mood, energy, time);

  return (
    <div className="suggestions-container">
      <h2>Task Suggestions</h2>
      <p className="summary">
        Based on your mood: <strong>{mood}</strong>, energy level:{" "}
        <strong>{energy}</strong>, and time: <strong>{time}</strong>, here are
        some suggestions:
      </p>
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index} className="task-item">
            {task}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskSuggestions;
