export const fetchMovieRecommendations = async () => {
  const url = "https://imdb236.p.rapidapi.com/imdb/lowest-rated-movies";
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "a06234723emshbc8b33264dc5866p1e27ebjsn36aea8822ef8",
      "x-rapidapi-host": "imdb236.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json(); // Parse JSON response
    console.log(result); // Log the response to inspect its structure
    return result.slice(0, 5); // Return the top 5 movies
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
};