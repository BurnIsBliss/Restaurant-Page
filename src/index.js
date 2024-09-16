import "./styles.css";
import { headingElement, imgElement, paragraphElement } from './landingPage.js';

const mainContentElement = document.querySelector('#content');
mainContentElement.append(headingElement, imgElement, paragraphElement)
console.log("Hello, World!");