import "bootstrap";
import "regenerator-runtime";
import "./scss/style.scss";

// main-section
import "./script/component/HeaderNavigation";
import "./script/component/HeaderJumbotron";

// detail-section
import "./script/component/breadcrumb-detail.js";
import "./script/component/DetailHeader";

import main from "./script/view/main.js";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

document.addEventListener("DOMContentLoaded", main);