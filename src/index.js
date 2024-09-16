import "./styles.css";
import { displayLandingPage } from './landingPage.js';
import { displayMenuPage } from "./menuPage.js";
import { displayAboutPage } from "./aboutPage.js";

function clearDOM () {
    const contentContainer = document.querySelector("#content");
    while (contentContainer.firstChild) contentContainer.removeChild(contentContainer.lastChild);
}

const homeButton = document.querySelector('#home');
homeButton.addEventListener("click", () => {
    clearDOM();
    displayLandingPage();
})

const menuButton = document.querySelector('#menu');
menuButton.addEventListener("click", () => {
    clearDOM();
    displayMenuPage();
})

const aboutButton = document.querySelector('#about');
aboutButton.addEventListener("click", () => {
    clearDOM();
    displayAboutPage();
})

displayLandingPage();
console.log("Hello, World!");