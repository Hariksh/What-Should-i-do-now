import React from "react";

const HomePage = ({ onStart, onTakeQuiz, onViewFunFacts }) => {
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
      <h1 className="home-title">Welcome to What Should I Do Now?</h1>
      <p className="home-quote">{randomQuote}</p>
      <div className="home-button-container">
        <button className="home-button start-button" onClick={onStart}>
          Start Selection
        </button>
        <button className="home-button quiz-button" onClick={onTakeQuiz}>
          Take Mood Quiz
        </button>
        <button className="home-button fun-facts-button" onClick={onViewFunFacts}>
          View Fun Facts
        </button>
      </div>
    </div>
  );
};

export default HomePage;
