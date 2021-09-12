import DataGenres from "../data/data-genres.json";

class MovieGenre extends HTMLElement {
  connectedCallback() {
    let htmlContent = "";

    DataGenres.genres.map((genre) => {
      htmlContent += `
          <div class="d-flow-root mt-2">
            <a href="#" class="text-dark float-left">${genre.name}</a>
          </div>`;
    });

    this.innerHTML += htmlContent;
  }
}

customElements.define("movie-genre", MovieGenre);
