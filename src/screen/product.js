import ProductList from "../components/products";

const ProductPage = () => {
    const state = {
        products: [{
            id: 1,
            name: "Product A",
        }, {
            id: 2,
            name: "Product B",
        }, {
            id: 3,
            name: "Product C",
        }],
    };
    window.removeItem = (id) => {
        state.products = state.products.filter((item) => item.id !== id);
        // eslint-disable-next-line no-use-before-define
        render();
    };
    const template = () => `
        <h1>Product Page</h1>
        <div>
            <div>ABC</div>
            ${ProductList()}
        </div>
    `;
    const render = () => {
        document.querySelector("#app").innerHTML = template(state);
    };
    return render();
};
export default ProductPage;
