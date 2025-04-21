import React, { useEffect, useState } from "react";

const FunFactsPage = ({ onReturnHome }) => {
  const [funFact, setFunFact] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchFunFact = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://uselessfacts.jsph.pl/random.json?language=en");
      const data = await response.json();
      setFunFact(data.text);
    } catch (error) {
      console.error("Error fetching fun fact:", error);
      setFunFact("Oops! Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFunFact();
  }, []);

  return (
    <div className="fun-facts-page">
      <h1 className="fun-title">Fun Facts to Brighten Your Day!</h1>
      {loading ? (
        <p className="loading-text">Loading a fun fact...</p>
      ) : (
        <p className="fun-fact-box">{funFact}</p>
      )}
      <div className="button-group">
        <button onClick={fetchFunFact} className="fun-button show-button">
          Show Another Fun Fact
        </button>
        <button onClick={onReturnHome} className="fun-button home-button">
          Return to Home
        </button>
      </div>
    </div>
  );
};

export default FunFactsPage;
