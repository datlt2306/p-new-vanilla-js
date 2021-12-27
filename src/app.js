import Navigo from "navigo";
import AboutPage from "./screen/about";
import ProductApp from "./screen/product";
const router = new Navigo("/", { linksSelector: "a" });

window.addEventListener("load", () => {
    router
        .on({
            "/": () => {
                console.log("Home Page");
            },
            "/about": () => {
                AboutPage().reRender();
            },
            "/products": () => {
                ProductApp().reRender();
            },
        })
        .resolve();
});
