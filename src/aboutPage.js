function displayAboutPage () {

    const contentElement = document.querySelector("#content");
    const createDivElement = document.createElement('div');
    createDivElement.className = 'about';
    const headingElement = document.createElement('h2');
    headingElement.textContent = 'About Us'
    let createParaElement = document.createElement('p');
    createParaElement.innerHTML = 'Head Manager <br>Phone: 123-123-1234 <br>Email: abc-efg@xyz.com<br>&nbsp;';
    createDivElement.append(headingElement, createParaElement);

    createParaElement = document.createElement('p');
    createParaElement.innerHTML = 'Head Chef <br>Phone: 123-123-9090 <br>Email: headchef-co@xyz.com<br>&nbsp;';
    createDivElement.appendChild(createParaElement);

    createParaElement = document.createElement('p');
    createParaElement.innerHTML = 'Associate Manager <br>Phone: 123-333-1234 <br>Email: poi-bnm@xyz.com<br>&nbsp;';
    createDivElement.appendChild(createParaElement);

    contentElement.appendChild(createDivElement);
}

export {displayAboutPage};