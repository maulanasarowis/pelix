class DetailHeader extends HTMLElement {
  set update(value) {
    this.setAttribute("title", value.title);
    this.setAttribute("overview", value.overview);
    this.render();
  }

  render() {
    this.title = this.getAttribute("title") || null;
    this.overview = this.getAttribute("overview") || null;

    this.innerHTML = `
        <style>
            .over-view{
              margin-top:100px;
            }
            .breadcrumb {
                font-size: 0.7rem;
                background-color: transparent;
                padding: 0;
            }
            .breadcrumb .breadcrumb-item a {
                color: #6c757d;
            }
            .breadcrumb .breadcrumb-item.active {
                color: #000000;
            }
        </style>
        <section class="over-view">
          <h5>${this.title}</h5>
          <div class="row recipe-details">
            <div class="col-12 mt-3 text-justify">
              <p>${this.overview}</p>
            </div>
          </div>
        </section>
        `;
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define("detail-header", DetailHeader);
