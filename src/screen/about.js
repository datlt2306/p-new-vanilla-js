/* eslint-disable no-undef */
const AboutPage = () => {
    const template = () => `<h1>About</h1>`;
    const render = () => {
        document.getElementById("app").innerHTML = template();
    };

    return { render };

};
export default AboutPage;