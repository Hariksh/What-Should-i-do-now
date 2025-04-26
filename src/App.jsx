import React, { useState } from "react";
import HomePage from "./pages/HomePage";
import ResultsPage from "./pages/ResultsPage";
import MoodSelector from "./components/MoodSelector";
import EnergyLevelSelector from "./components/EnergyLevelSelector";
import TimeSelector from "./components/TimeSelector";
import MoodQuiz from "./components/MoodQuiz";
import FunFactsPage from "./pages/FunFactsPage"; // Import FunFactsPage
import "./App.css";

const App = () => {
  const [page, setPage] = useState("home");
  const [mood, setMood] = useState(null);
  const [energy, setEnergy] = useState(null);
  const [time, setTime] = useState(null);

  const resetApp = () => {
    setMood(null);
    setEnergy(null);
    setTime(null);
    setPage("home");
  };

  return (
    <div className="app">
      {page === "home" && (
        <HomePage
          onStart={() => setPage("selection")}
          onTakeQuiz={() => setPage("quiz")}
          onViewFunFacts={() => setPage("funfacts")} // Navigate to Fun Facts Page
        />
      )}
      {page === "quiz" && (
        <MoodQuiz
          onResult={(resultMood) => {
            setMood(resultMood);
            setPage("quiz-complete"); // Navigate to a quiz completion page
          }}
          onReturnHome={() => setPage("home")}
        />
      )}
      {page === "quiz-complete" && (
        <div className="quiz-complete">
          <h2>Thank you for completing the quiz!</h2>
          <button
            className="home-button"
            onClick={() => setPage("home")} 
          >
            Return to Home
          </button>
        </div>
      )}
      {page === "selection" && (
        <>
          {!mood && (
            <MoodSelector
              setMood={setMood}
              onReturnHome={() => setPage("home")} 
            />
          )}
          {mood && !energy && <EnergyLevelSelector setEnergy={setEnergy} />}
          {mood && energy && !time && <TimeSelector setTime={setTime} />}
          {mood && energy && time && (
            <>
              <button
                className="next-button"
                onClick={() => setPage("results")}
              >
                See Results
              </button>
            </>
          )}
        </>
      )}
      {page === "results" && (
        <ResultsPage
          mood={mood}
          energy={energy}
          time={time}
          onReset={resetApp}
        />
      )}
      {page === "funfacts" && (
        <FunFactsPage onReturnHome={() => setPage("home")} />
      )}
    </div>
  );
};

export default App;