import "../component/MovieGenre";
import "../component/receipe-list.js";
import "../component/SearchBar";
import "../component/DropdownSort";

import DataSource from "../data/DataSource";

const main = () => {
  const searchElement = document.querySelector("search-bar");
  const receipeListElement = document.querySelector("receipe-list");
  const loaderElement = document.querySelector("#loader-text");

  const onButtonSearchClicked = () => {
    searchRecipe(searchElement.value);
  };

  const searchRecipe = async (keyword) => {
    loaderElement.style.display = "block";

    try {
      const result = await DataSource.searchRecipe(keyword);
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const renderResult = (results) => {
    loaderElement.style.display = "none";
    receipeListElement.receipes = results;
  };

  const fallbackResult = (message) => {
    loaderElement.style.display = "none";
    receipeListElement.renderError(message);
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

  // Default List Receipe
  // searchRecipe();
  movieTrending();

  // Search Receipe
  searchElement.clickEvent = onButtonSearchClicked;

  // Filter Categories
  // const checkbox = document.querySelectorAll("input[type=checkbox]");
  // checkbox.forEach((item) => {
  //   item.addEventListener("click", function () {
  //     const category = this.getAttribute("data-item");
  //     searchRecipe(category);
  //   });
  // });
};

export default main;
