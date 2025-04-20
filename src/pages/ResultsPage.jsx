import React from "react";
import { getTaskSuggestions } from "../utils/taskHelper";

const ResultsPage = ({ mood, energy, time, onReset }) => {
  const tasks = getTaskSuggestions(mood, energy, time);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Here’s What You Can Do!</h1>
      <p>
        Based on your mood: <strong>{mood}</strong>, energy level:{" "}
        <strong>{energy}</strong>, and time: <strong>{time}</strong>, here are
        some suggestions:
      </p>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {tasks.map((task, index) => (
          <li key={index} style={{ margin: "10px 0" }}>
            {task}
          </li>
        ))}
      </ul>
      <button
        onClick={onReset}
        style={{
          marginTop: "20px",
          fontSize: "18px",
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Start Over
      </button>
    </div>
  );
};

export default ResultsPage;