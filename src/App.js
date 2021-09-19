import "bootstrap";
import "regenerator-runtime";
import "./scss/style.scss";
import "./script/component/HeaderNavigation";
import "./script/component/MovieDetail";
import "./script/component/DetailHeader";

import main from "./script/view/main";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

document.addEventListener("DOMContentLoaded", main);
