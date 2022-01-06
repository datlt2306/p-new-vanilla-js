const CartPage = () => {
    const state = {
        carts: [],
    };
    const template = () => {

    };
    const render = () => {
        document.getElementById("app").innerHTML = template(state);
    };

    return render();
};
export default CartPage;
