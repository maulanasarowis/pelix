import "../component/MovieList";
import "../component/SearchBar";

import DataSource from "../data/DataSource";
const main = () => {
  const searchElement = document.querySelector("search-bar");
  const movieListElement = document.querySelector("movie-list");
  const loaderElement = document.querySelector("#loader-text");

  const onButtonSearchClicked = () => {
    searchMovie(searchElement.value);
  };

  const searchMovie = async (keyword) => {
    loaderElement.style.display = "block";

    try {
      const result = await DataSource.searchMovie(keyword);
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const renderResult = (results) => {
    loaderElement.style.display = "none";
    movieListElement.movies = results;
  };

  const fallbackResult = (message) => {
    loaderElement.style.display = "none";
    movieListElement.renderError(message);
  };

  const movieTrending = async () => {
    loaderElement.style.display = "block";

    try {
      const result = await DataSource.movieTrending();
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  movieTrending();

  searchElement.clickEvent = onButtonSearchClicked;
};

export default main;
