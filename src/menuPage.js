// Code to create the menu page of the website
import grilledFish from "./images/grilled-fish.jpg"
import lemonade from "./images/lemonade.jpg"
import smoothies from "./images/smoothies.jpg"
import avocadoToast from "./images/avocado-toast.jpg";
import friedRice from "./images/fried-rice.jpg";
import dynamiteShrimp from "./images/dynamite-shrimp.jpg";

function appetizersMenu () {

    const divElement = document.createElement('div');
    const headingElement = document.createElement('h1');
    const unorderedListElement = document.createElement('ul');

    divElement.className = 'appetizers';
    headingElement.textContent = 'Appetizers';
    divElement.append(headingElement, unorderedListElement);

    // Creating the menu items
    let listElement = document.createElement('li');
    listElement.textContent = "Chicken Pie: $12";
    unorderedListElement.appendChild(listElement);
    listElement = document.createElement('li');
    listElement.textContent = "Avocado Toast: $10";
    unorderedListElement.appendChild(listElement);
    listElement = document.createElement('li');
    listElement.textContent = "Fish Sandwich: $13";
    unorderedListElement.appendChild(listElement);
    listElement = document.createElement('li');
    listElement.textContent = "Vegetable Salad: $14";
    unorderedListElement.appendChild(listElement);
    listElement = document.createElement('li');
    listElement.textContent = "Dynamite Shrimp: $17";
    unorderedListElement.appendChild(listElement);

    return divElement;
}

function mainCourseMenu () {

    const divElement = document.createElement('div');
    const headingElement = document.createElement('h1');
    const unorderedListElement = document.createElement('ul');

    divElement.className = 'mainCourse';
    headingElement.textContent = 'Main Course';
    divElement.append(headingElement, unorderedListElement);

    // Creating the menu items
    let listElement = document.createElement('li');
    listElement.textContent = "Fried Rice: $10";
    unorderedListElement.appendChild(listElement);
    listElement = document.createElement('li');
    listElement.textContent = "T-Bone Steak: $12";
    unorderedListElement.appendChild(listElement);
    listElement = document.createElement('li');
    listElement.textContent = "Spicy Chicken: $12";
    unorderedListElement.appendChild(listElement);
    listElement = document.createElement('li');
    listElement.textContent = "Grilled Fish: $13.5";
    unorderedListElement.appendChild(listElement);
    listElement = document.createElement('li');
    listElement.textContent = "Roasted Duck: $15";
    unorderedListElement.appendChild(listElement);


    return divElement;
}

function beveragesMenu () {

    const divElement = document.createElement('div');
    const headingElement = document.createElement('h1');
    const unorderedListElement = document.createElement('ul');

    divElement.className = 'beverages';
    headingElement.textContent = 'Beverages';
    divElement.append(headingElement, unorderedListElement);

    // Creating the menu items
    let listElement = document.createElement('li');
    listElement.textContent = "Mineral Water: $5";
    unorderedListElement.appendChild(listElement);
    listElement = document.createElement('li');
    listElement.textContent = "Lemonade: $6";
    unorderedListElement.appendChild(listElement);
    listElement = document.createElement('li');
    listElement.textContent = "Rose Milk: $6";
    unorderedListElement.appendChild(listElement);
    listElement = document.createElement('li');
    listElement.textContent = "Fresh Juice: $7";
    unorderedListElement.appendChild(listElement);
    listElement = document.createElement('li');
    listElement.textContent = "Smoothies: $8";
    unorderedListElement.appendChild(listElement);

    return divElement;
}

function appendImages_1 () {
    let createContainer = document.createElement("div");
    createContainer.classList = 'class1';
    let imgElement = document.createElement('img');
    imgElement.src = avocadoToast;
    imgElement.alt = 'Picture of avocado toast';
    createContainer.append(imgElement);

    imgElement = document.createElement('img');
    imgElement.src = friedRice;
    imgElement.alt = 'Picture of fried rice';
    createContainer.append(imgElement);

    imgElement = document.createElement('img');
    imgElement.src = lemonade;
    imgElement.alt = 'Picture of lemonade';
    createContainer.append(imgElement);

    return createContainer;
}

function appendImages_2 () {
    let createContainer = document.createElement("div");
    createContainer.classList = 'class3';
    let imgElement = document.createElement('img');
    imgElement.src = dynamiteShrimp;
    imgElement.alt = 'Picture of shrimp shots';
    createContainer.append(imgElement);

    imgElement = document.createElement('img');
    imgElement.src = grilledFish;
    imgElement.alt = 'Picture of grilled fish';
    createContainer.append(imgElement);

    imgElement = document.createElement('img');
    imgElement.src = smoothies;
    imgElement.alt = 'Picture of smoothies';
    createContainer.append(imgElement);

    return createContainer;
}


function displayMenuPage () {
    const mainContentContainer = document.querySelector('#content');
    let divElementForContent = document.createElement('div');
    divElementForContent.className = 'class2';
    divElementForContent.append(appetizersMenu(), mainCourseMenu(), beveragesMenu());
    mainContentContainer.append(appendImages_1(), divElementForContent, appendImages_2());
}

export { displayMenuPage };