import React, { useState } from "react";

const TimeSelector = ({ setTime }) => {
  const timeOptions = ["Quick", "Moderate", "Plenty"];

  const timeBackgrounds = {
    Quick: "linear-gradient(135deg, #ffcc80, #ffa726)", // Bright and fast
    Moderate: "linear-gradient(135deg, #64b5f6, #42a5f5)", // Balanced and calm
    Plenty: "linear-gradient(135deg, #81c784, #66bb6a)", // Relaxed and spacious
  };

  const [selectedTime, setSelectedTime] = useState("");

  const handleTimeClick = (time) => {
    setSelectedTime(time);
    setTime(time);
  };

  return (
    <div className="time-selector">
      <h2>How Much Time Do You Have?</h2>
      <div className="time-grid">
        {timeOptions.map((time) => (
          <div
            key={time}
            className={`time-box ${time.toLowerCase()} ${
              selectedTime === time ? "selected" : ""
            }`}
            onClick={() => handleTimeClick(time)}
            style={{
              background: timeBackgrounds[time],
              border: selectedTime === time ? "3px solid #000" : "none",
            }}
          >
            {time}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimeSelector;