// Code to create the Homepage of the website

import restaurantImage from "./images/restaurant-img.jpg"

function displayLandingPage () {

    const mainContentElement = document.querySelector('#content');
    const extraDiv = document.createElement('div');
    const headingElement = document.createElement('h1');
    headingElement.textContent = 'Fine and Dine';

    const imgElement = document.createElement('img');
    imgElement.className = 'mainImage';
    imgElement.src = restaurantImage;
    imgElement.alt = 'picture of a restaurant';

    const paragraphElement = document.createElement('p');
    paragraphElement.innerHTML = "One of the exceptional fine dine restaurant in the Bay Area. Dishes so good that it will take your taste buds for a tour around the world.<br> Menu so affordable that it doesn't burn a hole in your pocket. LOL!!!!";

    extraDiv.append(headingElement, imgElement, paragraphElement);
    mainContentElement.appendChild(extraDiv);

}

export {displayLandingPage};