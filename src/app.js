import Navigo from "navigo";
import AboutPage from "./screen/about";
import HomePage from "./screen/home";
import ProductPage from "./screen/product";
const router = new Navigo("/", { linksSelector: "a" });

window.addEventListener("DOMContentLoaded", () => {
    router
        .on({
            "/": () => {
                HomePage().render();
            },
            "/about": () => {
                AboutPage().render();
            },
            "/products": async () => {
                ProductPage().render();
            },
        })
        .resolve();
});
