import Navigo from "navigo";
import AboutPage from "./screen/about";
import ProductDetail from "./screen/detail";
import HomePage from "./screen/home";
import ProductPage from "./screen/product";
const router = new Navigo("/", { linksSelector: "a" });

window.addEventListener("DOMContentLoaded", () => {
    router
        .on({
            "/": () => {
                HomePage();
            },
            "/about": () => {
                AboutPage();
            },
            "/products": () => {
                ProductPage();
            },
            "/product/:id": ({ data }) => {
                ProductDetail(data);
            },
        })
        .resolve();
});
