import React from "react";

const MoodSelector = ({ setMood }) => {
  const moods = [
    { name: "Happy", emoji: "😊" },
    { name: "Sad", emoji: "😢" },
    { name: "Bored", emoji: "😐" },
    { name: "Stressed", emoji: "😫" },
    { name: "Lazy", emoji: "😴" },
    { name: "Productive", emoji: "💪" },
    { name: "Excited", emoji: "🤩" },
    { name: "Anxious", emoji: "😰" },
    { name: "Relaxed", emoji: "😌" },
    { name: "Motivated", emoji: "🔥" },
    { name: "Curious", emoji: "🧐" },
    { name: "Tired", emoji: "🥱" },
  ];

  const moodBackgrounds = {
    Happy: "linear-gradient(135deg, #ffeb3b, #ffc107)",
    Sad: "linear-gradient(135deg, #90caf9, #42a5f5)",
    Bored: "linear-gradient(135deg, #e0e0e0, #bdbdbd)",
    Stressed: "linear-gradient(135deg, #ef9a9a, #e57373)",
    Lazy: "linear-gradient(135deg, #ffe082, #ffca28)",
    Productive: "linear-gradient(135deg, #81c784, #66bb6a)",
    Excited: "linear-gradient(135deg, #ff8a65, #ff7043)",
    Anxious: "linear-gradient(135deg, #ce93d8, #ba68c8)",
    Relaxed: "linear-gradient(135deg, #80deea, #4dd0e1)",
    Motivated: "linear-gradient(135deg, #ffb74d, #ffa726)",
    Curious: "linear-gradient(135deg, #7986cb, #5c6bc0)",
    Tired: "linear-gradient(135deg, #b0bec5, #90a4ae)",
  };

  return (
    <div className="container">
      <h1 className="selector-title">How Are You Feeling Today?</h1>
      <div className="mood-grid">
        {moods.map(({ name, emoji }) => (
          <div
            key={name}
            className={`mood-box mood-${name.toLowerCase()}`}
            onClick={() => setMood(name)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter") setMood(name);
            }}
            style={{ background: moodBackgrounds[name] }}
          >
            <p>{emoji}</p>
            <p>{name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoodSelector;
