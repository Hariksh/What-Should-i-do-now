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
            if (resultMood === "Sad" || resultMood === "Stressed") {
              setPage("funfacts"); // Navigate to Fun Facts if mood is bad
            } else {
              setPage("selection");
            }
          }}
          onReturnHome={() => setPage("home")}
        />
      )}
      {page === "selection" && (
        <>
          {!mood && (
            <MoodSelector
              setMood={setMood}
              onReturnHome={() => setPage("home")} // Pass function to navigate to HomePage
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