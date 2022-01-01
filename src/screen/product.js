/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */

// import { getAll, remove } from "../api/product";
import data from "../../data";

const ProductPage = () => {
    const state = {
        products: data,
    };
    // const getProduct = async () => {
    //     state.products = await getAll();
    // };
    window.removeProduct = async (id) => {
        const newProducts = state.products.filter((item) => item.id !== id);
        state.products = newProducts;
        // state.products = await remove(id);
        render();
    };
    const template = ({ products }) => `<table><tbody> 
            ${products.map(({ name, id }) => `<tr>
                        <td>
                            <a href="/product/${id}">${name}</a>
                            <button onclick="removeProduct(${id})">Remove</button>
                        </td>
                    </tr>`).join("")}
        </tbody></table>`;
    const render = async () => {
        // await getProduct();
        document.getElementById("app").innerHTML = template(state);
    };
    return render();
};
export default ProductPage;
