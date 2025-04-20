import React, { useState } from "react";
import HomePage from "./pages/HomePage";
import ResultsPage from "./pages/ResultsPage";
import MoodSelector from "./components/MoodSelector";
import EnergyLevelSelector from "./components/EnergyLevelSelector";
import TimeSelector from "./components/TimeSelector";
import MoodQuiz from "./components/MoodQuiz"; 
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
    <div className="container">
      {page === "home" && (
        <HomePage
          onStart={() => setPage("selection")}
          onTakeQuiz={() => setPage("quiz")} // Add a button to start the quiz
        />
      )}
      {page === "quiz" && (
        <MoodQuiz
          onResult={(resultMood) => {
            setMood(resultMood); // Set the mood based on quiz result
            setPage("selection"); // Navigate to the selection page
          }}
        />
      )}
      {page === "selection" && (
        <>
          {!mood && <MoodSelector setMood={setMood} />}
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
    </div>
  );
};

export default App;