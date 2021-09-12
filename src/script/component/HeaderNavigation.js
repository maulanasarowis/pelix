class HeaderNavigation extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <style>
            header {
              list-style-type: none;
              background-color: #FEFEFE;
              overflow: hidden;
              top: 0;
              position: fixed;
              justify-content: center;
              width: 100%;
              z-index: 1;
              
            }
            .brand-icon {
                width: 48px;
                border-radius: 15px;
            }
            
            .navbar .navbar-brand {
                font-family: "Fira Sans Condensed", sans-serif;
                font-size: 2rem;
                margin-right: 8rem;
            }

            .navbar .nav-item {
                margin-left: 2rem;
            }

            .navbar .nav-item.active {
                font-weight: bold;
            }
        </style>
        <header>
            <nav class="container my-3 navbar navbar-expand-lg navbar-light p-0">
                <a class="navbar-brand" href="#">
                    <span>🎬</span>Pelix
                </a>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="#">TV</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Series</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Movies</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Cartoons</a>
                        </li>
                        
                    </ul>
                </div>
                <search-bar></search-bar>
            </nav>
        </header>`;
  }
}

customElements.define("header-navigation", HeaderNavigation);
