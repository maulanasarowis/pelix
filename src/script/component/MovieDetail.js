class MovieDetail extends HTMLElement {
  set currentPage(value) {
    this.setAttribute("currentpage", value);
    this.render();
  }

  render() {
    this.currentpage = this.getAttribute("currentpage") || null;

    this.innerHTML = `
        <style>
            .detail {
                font-size: 0.7rem;
                background-color: transparent;
                padding: 0;
                list-style-type: none;
                
            }
            .detail .detail-item a {
                color: #6c757d;
            }
            .detail .detail-item.active {
                color: #000000;
            }
        </style>
        <nav class="d-flow-root over-view" aria-label="detail">
            <ol class="detail mt-2 float-left">
                <li class="detail-item"><a href="#">Movie</a></li>
                <li class="detail-item active" aria-current="page">${this.currentpage}</li>
            </ol>
            <button id="backToLanding" class="btn btn-outline-danger rounded-pill float-right"><i class="fa fa-arrow-left"></i> Back</button>
        </nav>`;

    $("#backToLanding").click(function () {
      $("main").show();
      $(".details").hide();
    });
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define("movie-detail", MovieDetail);
