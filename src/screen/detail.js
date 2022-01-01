// import data from "../../data";

import { get } from "../api/product";

const ProductDetail = ({ id }) => {
    const state = {
        product: {},
    };

    const getProduct = async () => {
        // const result = data.find((item) => item.id === id);
        // state.product = result;
        state.product = await get(id);
    };

    const template = ({ product }) => `<div> ${product.name}<button>Add to cart</button></div>`;
    const render = async () => {
        await getProduct();
        document.getElementById("app").innerHTML = template(state);
    };
    return render();
};
export default ProductDetail;
