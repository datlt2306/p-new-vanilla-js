import { render, html } from "uhtml";
/* eslint-disable no-undef */
const AboutPage = () => {
    const template = () => html`<h1>About</h1>`;
    const reRender = () => {
        // Hiển thị ra thằng có id là app, nội dung là hàm template
        render(app, template());
    };

    return { reRender };

};
export default AboutPage;