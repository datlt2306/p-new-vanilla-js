import { getAll, remove } from "../api/product";
/* eslint-disable no-undef */
const ProductPage = () => {
    const state = {
        products: []
    };
    const getProduct = async () => {
        state.products = await getAll();
    };
    window.removeProduct = async (id) => {
        state.products = await remove(id);
        render();
    };
    const template = ({ products }) => {
        return `<table><tbody> 
            ${products.map(({ name, id }) => {
            return `<tr>
                        <td>${name}<button onclick="removeProduct(${id})">Remove</button>
                        </td>
                    </tr>`;
        }).join("")}
        </tbody></table>`;
    };
    const render = async () => {
        await getProduct();
        document.getElementById("app").innerHTML = template(state);
    };
    return { render };
};
export default ProductPage;