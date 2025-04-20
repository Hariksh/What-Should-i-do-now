import React, { useState } from "react";

const EnergyLevelSelector = ({ setEnergy }) => {
  const energyLevels = ["Low", "Medium", "High"];

  const energyBackgrounds = {
    Low: "linear-gradient(135deg, #b0bec5, #90a4ae)", // Calm and muted colors
    Medium: "linear-gradient(135deg, #81c784, #66bb6a)", // Balanced and vibrant
    High: "linear-gradient(135deg, #ff8a65, #ff7043)", // Energetic and bold
  };

  const [selectedEnergy, setSelectedEnergy] = useState("");

  const handleEnergyClick = (level) => {
    setSelectedEnergy(level);
    setEnergy(level);
  };

  return (
    <div className="energy-selector">
      <h2>Select Your Energy Level</h2>
      <div className="energy-levels">
        {energyLevels.map((level) => (
          <div
            key={level}
            className={`energy-box ${level.toLowerCase()} ${
              selectedEnergy === level ? "selected" : ""
            }`}
            onClick={() => handleEnergyClick(level)}
            style={{
              background: energyBackgrounds[level],
              border: selectedEnergy === level ? "3px solid #000" : "none",
            }}
          >
            {level}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EnergyLevelSelector;