/* eslint-disable no-undef */
const HomePage = () => {
    const template = () => `<h1>Home Page</h1>`;
    const render = () => {
        document.getElementById("app").innerHTML = template();
    };

    return render();
};
export default HomePage;
