class HeaderNavigation extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <style>
            header {
              list-style-type: none;
              background-color: #131620;
              overflow: hidden;
              top: 0;
              position: fixed;
              justify-content: center;
              width: 100%;
              z-index: 1;
              color: #fff;
            }
            .brand-icon {
                width: 48px;
                border-radius: 15px;
            }
            
            .navbar .navbar-brand {
                font-size: 2rem;
                margin-right: 8rem;
                color: #F9C213;
            }

            .navbar .nav-item {
                margin-left: 2rem;
            }

            .navbar .nav-item.active {
                font-weight: bold;
            }

            .navbar .nav-item a.nav-link {
                color: #fff !important;
                text-decoration: none;
            }
            .navbar .nav-item.active a.nav-link {
                color: #F9C213 !important;
                text-decoration: none;
            }
        </style>
        <header>
            <nav class="container my-3 navbar navbar-expand-lg navbar-light p-0">
                <a class="navbar-brand" href="#" style="color: #F9C213">
                    <span>🎬</span>Pelix<span style="color: #fff">.com</span>
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
                <search-bar class="ml-2"></search-bar>
            </nav>
        </header>`;
  }
}

customElements.define("header-navigation", HeaderNavigation);
