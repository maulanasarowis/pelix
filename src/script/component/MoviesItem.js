import "./breadcrumb-detail.js";
import DataSource from "../data/DataSource.js";

const IMG_URL = "https://image.tmdb.org/t/p/w500";

class ReceipeItem extends HTMLElement {
  set receipe(item) {
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
            }

            .card .card-body .card-text {
                font-size: 0.7rem;
            }

            .icon-svg {
                width: 11px;
                margin-top: -3px;
            }
        </style>
        <div class="col mb-4">
            <div data-aos="fade-up" data-aos-duration="1000" data-aos-anchor=".jumbotron">
                <div class="card card-receipe" data-id="${this._item.id}">
                    <img src="${
                      this._item.poster_path
                        ? IMG_URL + this._item.poster_path
                        : "http://via.placeholder.com/1080x1580"
                    }" 
                        class="card-img card-img-top" alt="${
                          this._item.title
                        }" />
                    <div class="card-body">
                        <h5 class="card-title text-truncate">${
                          this._item.title
                        }</h5>
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
        </div>`;

    // Sequenced Animation
    let delay = 0;
    $("[data-aos]").each(function () {
      if ($(this).is(":visible") == true) {
        delay = delay + 400;
        $(this).attr("data-aos-delay", delay);
      }
    });

    // PreLoader Element
    const loaderElement = document.querySelector("#loader-text");

    // Datasource Infromation Receipe
    const informationRecipe = async (id) => {
      loaderElement.style.display = "block";

      try {
        const result = await DataSource.informationRecipe(id);
        renderResult(result);
      } catch (message) {
        fallbackResult(message);
      }
    };

    // Callback Success
    const renderResult = (results) => {
      loaderElement.style.display = "none";

      this.switchPage();

      // Breadcrumb
      const breadcrumbElement = document.querySelector("breadcrumb-detail");
      breadcrumbElement.currentPage = results.title;

      // Image
      $("#detailImage").attr(
        "src",
        results.backdrop_path
          ? IMG_URL + results.backdrop_path
          : "http://via.placeholder.com/1080x1580"
      );

      // Detail Header
      const detailHeaderElement = document.querySelector("detail-header");
      const dataHeader = {
        title: results.title ? results.title : "NaN",
        overview: results.overview ? results.overview : "-",
      };
      detailHeaderElement.update = dataHeader;

      // Ingredients
      // results.extendedIngredients.forEach((item) => {
      //   $(".ingredients").append(`<li>${item.original}</li>`);
      // });

      // Method
      // results.analyzedInstructions[0].steps.forEach((item) => {
      //   $(".methods").append(`<li>${item.step}</li>`);
      // });

      $(window).scrollTop(0);
    };

    // Callback Failed
    const fallbackResult = (message) => {
      loaderElement.style.display = "none";
      alert(message);
    };

    // Card Receipe on Click
    const cardRecipe = this.querySelector(".card-receipe");
    cardRecipe.addEventListener("click", function () {
      const idReceipe = this.getAttribute("data-id");
      informationRecipe(idReceipe);
    });
  }
}

customElements.define("receipe-item", ReceipeItem);
