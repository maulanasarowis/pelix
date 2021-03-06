class SearchBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.querySelector("#searchElement").value;
  }

  render() {
    this.innerHTML = `
      <style>
        input[type="search"] {
          background-color: #1C202F;
          background-color: ;
          border: 0;
        }
        input[type="search"]::placeholder {
          font-size: 0.8rem;
          color: $gray-500;
        }
        .search-container {
          display: flex;
        }
        .search-container .form-control {
          padding-left: 3rem;
          background-color: #1C202F;
        }
        .search-container .placeholder-icon {
          position: absolute;
          z-index: 1;
          display: block;
          width: 3rem;
          height: 2.375rem;
          line-height: 2.375rem;
          text-align: center;
          pointer-events: none;
          color: $gray-500;
        }
        .btn-search{
          background-color: #F9C213;
          margin-left: 0.4rem;
          border-radius: 0.5rem;
        }
      </style>
      <div class="d-flex search-container">
        <span class="fa fa-search placeholder-icon"></span>
        <input id="searchElement" class="form-control me-2" type="search" placeholder="Search film and more..." aria-label="Search">
        <button class="btn btn-search" id="searchButtonElement" type="button">Search</button>
      </div>
      `;

    this.querySelector("#searchButtonElement").addEventListener(
      "click",
      this._clickEvent
    );
  }
}

customElements.define("search-bar", SearchBar);
