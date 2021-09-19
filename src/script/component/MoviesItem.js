import "./MovieDetail";
import DataSource from "../data/DataSource";

const IMG_URL = "https://image.tmdb.org/t/p/w500";

class MovieItem extends HTMLElement {
  set movie(item) {
    this._item = item;
    this.render();
  }

  switchPage() {
    $("main").hide();
    $(".details").show();
  }

  render() {
    this.innerHTML = `
      <style>
        .card {
          font-family: "Open Sans", sans-serif;
          cursor: pointer;
          border: 0;
          background-color: #1C202F;
          border-radius: 1rem 1rem 0rem 0rem;
        }
        .card:hover {
          opacity: 0.7;
        }
        .card img.card-img {
          height: 100%;
          object-fit: cover;
          border-radius: 1rem;
        }
        .card .card-body {
          padding: 1.25rem 0 1.25rem 0;
        }
        .card .card-body .card-title {
          font-size: 0.9rem;
          padding: 0.5rem;
        }
        .card .card-body .card-text {
          font-size: 0.7rem;
          padding: 0.5rem;
        }
        .icon-svg {
          width: 11px;
          margin-top: -3px;
        }
      </style>
      <div class="col mb-4">
        <div data-aos="fade-up" data-aos-duration="1000">
          <div class="card card-movie" data-id="${this._item.id}">
            <img src="${
              this._item.poster_path
                ? IMG_URL + this._item.poster_path
                : "http://via.placeholder.com/1080x1580"
            }" 
                class="card-img card-img-top" alt="${this._item.title}" />
            <div class="card-body">
              <h5 class="card-title text-truncate">${this._item.title}</h5>
              <p class="card-text">
                <span class="float-left"> 
                Date ${this._item.release_date}</span>
                <span class="float-right font-weight-bold">${
                  this._item.vote_average
                } ⭐</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      `;

    let delay = 0;
    $("[data-aos]").each(function () {
      if ($(this).is(":visible") == true) {
        delay = delay + 100;
        $(this).attr("data-aos-delay", delay);
      }
    });

    const loaderElement = document.querySelector("#loader-text");

    const informationMovie = async (id) => {
      loaderElement.style.display = "block";

      try {
        const result = await DataSource.informationMovie(id);
        renderResult(result);
      } catch (message) {
        fallbackResult(message);
      }
    };

    const renderResult = (results) => {
      loaderElement.style.display = "none";

      this.switchPage();

      const movieDetailElement = document.querySelector("movie-detail");
      movieDetailElement.currentPage = results.title;

      $("#detailImage").attr(
        "src",
        results.backdrop_path
          ? IMG_URL + results.backdrop_path
          : "http://via.placeholder.com/1080x1580"
      );

      const detailHeaderElement = document.querySelector("detail-header");
      const dataHeader = {
        title: results.title ? results.title : "NaN",
        overview: results.overview ? results.overview : "-",
      };
      detailHeaderElement.update = dataHeader;

      $(window).scrollTop(0);
    };

    const fallbackResult = (message) => {
      loaderElement.style.display = "none";
      alert(message);
    };

    const cardMovie = this.querySelector(".card-movie");
    cardMovie.addEventListener("click", function () {
      const idMovie = this.getAttribute("data-id");
      informationMovie(idMovie);
    });
  }
}

customElements.define("movie-item", MovieItem);
