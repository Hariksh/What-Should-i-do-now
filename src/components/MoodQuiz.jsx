import React, { useState } from "react";

const questions = [
  {
    question: "🌦 Your emotional weather forecast?",
    answers: [
      { text: "Sunny with rainbows", moods: { Happy: 3, Excited: 1 } },
      { text: "Heavy thunderstorm", moods: { Sad: 3, Stressed: 2 } },
      { text: "Calm overcast", moods: { Relaxed: 3, Bored: 1 } },
      { text: "Foggy confusion", moods: { Curious: 2, Anxious: 2 } },
    ],
  },
  {
    question: "⚡ Your energy battery level?",
    answers: [
      { text: "200% charged!", moods: { Motivated: 3, Productive: 2 } },
      { text: "Low power mode", moods: { Tired: 3, Lazy: 2 } },
      { text: "Steady 50%", moods: { Relaxed: 2, Happy: 1 } },
      { text: "Overheating!", moods: { Anxious: 3, Stressed: 2 } },
    ],
  },
  {
    question: "🧠 Current mental state?",
    answers: [
      { text: "Racecar thoughts", moods: { Anxious: 3, Curious: 2 } },
      { text: "Zen garden calm", moods: { Relaxed: 3, Happy: 1 } },
      { text: "Screensaver mode", moods: { Bored: 3, Tired: 2 } },
      { text: "Laser focus", moods: { Productive: 3, Motivated: 2 } },
    ],
  },
  {
    question: "🎭 How are you feeling socially?",
    answers: [
      { text: "Life of the party", moods: { Excited: 3, Motivated: 2 } },
      { text: "Prefer to be alone", moods: { Relaxed: 3, Curious: 2 } },
      { text: "Feeling disconnected", moods: { Sad: 3, Anxious: 2 } },
      { text: "Enjoying close company", moods: { Happy: 3, Productive: 1 } },
    ],
  },
  {
    question: "🌈 What colors describe your mood?",
    answers: [
      { text: "Bright and vibrant", moods: { Happy: 3, Excited: 2 } },
      { text: "Dark and gloomy", moods: { Sad: 3, Stressed: 2 } },
      { text: "Soft and pastel", moods: { Relaxed: 3, Curious: 1 } },
      { text: "Neutral and calm", moods: { Bored: 3, Tired: 2 } },
    ],
  },
  {
    question: "🎵 What type of music matches your mood?",
    answers: [
      { text: "Upbeat and energetic", moods: { Excited: 3, Motivated: 2 } },
      { text: "Slow and soothing", moods: { Relaxed: 3, Happy: 1 } },
      { text: "Melancholic and deep", moods: { Sad: 3, Curious: 2 } },
      { text: "No music, just silence", moods: { Tired: 3, Bored: 2 } },
    ],
  },
  {
    question: "🍴 What kind of food are you craving?",
    answers: [
      { text: "Something sweet and indulgent", moods: { Happy: 3, Lazy: 2 } },
      { text: "Comfort food", moods: { Sad: 3, Relaxed: 2 } },
      { text: "Healthy and energizing", moods: { Motivated: 3, Productive: 2 } },
      { text: "Spicy and exciting", moods: { Excited: 3, Curious: 2 } },
    ],
  },
  {
    question: "🌍 What environment do you want to be in?",
    answers: [
      { text: "A bustling city", moods: { Excited: 3, Motivated: 2 } },
      { text: "A quiet forest", moods: { Relaxed: 3, Curious: 2 } },
      { text: "A cozy home", moods: { Lazy: 3, Happy: 2 } },
      { text: "A serene beach", moods: { Relaxed: 3, Happy: 1 } },
    ],
  },
  {
    question: "📚 What activity sounds appealing?",
    answers: [
      { text: "Reading a book", moods: { Curious: 3, Relaxed: 2 } },
      { text: "Dancing to music", moods: { Excited: 3, Happy: 2 } },
      { text: "Taking a nap", moods: { Tired: 3, Lazy: 2 } },
      { text: "Organizing your space", moods: { Productive: 3, Motivated: 2 } },
    ],
  },
];

const MoodQuiz = ({ onResult, onReturnHome }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState({});
  const [quizComplete, setQuizComplete] = useState(false);
  const [resultMood, setResultMood] = useState(null); // State to store the result mood

  const handleAnswerClick = (moods) => {
    const updatedScores = { ...scores };
    Object.entries(moods).forEach(([mood, value]) => {
      updatedScores[mood] = (updatedScores[mood] || 0) + value;
    });
    setScores(updatedScores);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizComplete(true);
      const result = calculateResult(updatedScores);
      setResultMood(result); // Store the result mood
      onResult(result); // Pass the result to the parent component
    }
  };

  const calculateResult = (scores) => {
    return Object.entries(scores)
      .sort((a, b) => b[1] - a[1])[0][0]; // Return the mood with the highest score
  };

  return (
    <div className="mood-quiz">
      {!quizComplete ? (
        <>
          <h2>{questions[currentQuestion].question}</h2>
          <div className="answers">
            {questions[currentQuestion].answers.map((answer, index) => (
              <button
                key={index}
                className="answer-button"
                onClick={() => handleAnswerClick(answer.moods)}
              >
                {answer.text}
              </button>
            ))}
          </div>
          <div className="progress-bar">
            Question {currentQuestion + 1} of {questions.length}
          </div>
        </>
      ) : (
        <div className="quiz-result">
          <h2>Your Mood: {resultMood}</h2> {/* Display the result mood */}
          <p>Thank you for completing the quiz!</p>
        </div>
      )}
      <button
        onClick={onReturnHome}
      >
        Return to Home
      </button>
    </div>
  );
};

export default MoodQuiz;