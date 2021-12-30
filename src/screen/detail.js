import data from "../../data";
const ProductDetail = ({ id }) => {
    const state = {
        product: {}
    };

    const getProduct = () => {
        const result = data.find(item => item.id == id);
        state.product = result;
    };

    const template = ({ product }) => {
        return `<div>${product.name}</div>`;
    };
    const render = () => {
        getProduct();
        document.getElementById("app").innerHTML = template(state);
    };
    return render();
};
export default ProductDetail;