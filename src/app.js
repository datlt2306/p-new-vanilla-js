import Navigo from "navigo";
import AboutPage from "./screen/about";
import ProductDetail from "./screen/detail";
import HomePage from "./screen/home";
import ProductPage from "./screen/product";

const router = new Navigo("/", { linksSelector: "a" });

window.addEventListener("DOMContentLoaded", () => {
    router.on("admin/*", () => { }, {
        before(done) {
            if (localStorage.getItem("admin")) {
                router.navigate("about");
            } else {
                done();
            }
        },
    });
    router.on({
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
        "/admin/product": () => {
            console.log("admin product");
        },
        "/admin/product/:id/edit": () => {
            console.log("admin edit product");
        },
    });

    router.notFound(() => {
        console.log("Not found");
    })
        .resolve();
});
