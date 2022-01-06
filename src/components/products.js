/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */

// import { getAll, remove } from "../api/product";
import data from "../../data";

const ProductList = () => {
    const state = {
        products: data,
    };
    const getProduct = async () => {
        // state.products = await getAll();
    };
    window.removeProduct = async (id) => {
        state.products = state.products.filter((item) => item.id !== id);
        // state.products = await remove(id);
        render();
    };
    const template = () => `<table><tbody> 
            ${state.products.map(({ name, id }) => `<tr>
                        <td>
                            <a href="/product/${id}">${name}</a>
                            <button onclick="removeProduct(${id})">Remove</button>
                        </td>
                    </tr>`).join("")}
        </tbody></table>`;
    const render = () => template(state);
    return render();
};
export default ProductList;
