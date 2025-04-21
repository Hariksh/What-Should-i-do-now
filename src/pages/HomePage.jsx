import React from "react";

const HomePage = ({ onStart, onTakeQuiz }) => {
  const randomQuotes = [
    "Why procrastinate tomorrow when you can procrastinate today?",
    "Life’s too short to be bored. Let’s fix that!",
    "Feeling stuck? Let’s shake things up!",
    "When in doubt, spin the wheel of fun!",
  ];

  const randomQuote =
    randomQuotes[Math.floor(Math.random() * randomQuotes.length)];

  return (
    <div className="home-page">
      <h1>Welcome to What Should I Do Now?</h1>
      <p style={{ fontStyle: "italic", marginBottom: "20px" }}>{randomQuote}</p>
      <button className="start-button" onClick={onStart}
      style={{ marginRight: "20px" }}>
        Start Selection
      </button>
      <button className="quiz-button" onClick={onTakeQuiz}>
        Take Mood Quiz
      </button>
    </div>
  );
};

export default HomePage;
