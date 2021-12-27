import { render, html } from "uhtml";
import { getAll, remove } from "../api/product";
/* eslint-disable no-undef */
const ProductApp = () => {
    const state = {
        products: []
    };
    const getProduct = async () => {
        state.products = await getAll();
    };
    const removeProduct = async (id) => {
        state.products = await remove(id);
        reRender();
    };
    const template = (s) => {
        return html`<table>
                        <tbody> ${s.products.map(({ name, id }) => {
            return html`<tr><td>${name}<button onclick="${() => removeProduct(id)}">Remove</button></td></tr>`;
        })}</tbody>
                    </table>`;
    };
    const reRender = async () => {
        await getProduct();
        await render(app, template(state));
    };
    return { reRender };
};
export default ProductApp;