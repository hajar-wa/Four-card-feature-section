import data from "./data.js";
const sections = document.getElementById("sections");

// Building the HTML content
let content = '';

for (let i = 0; i < data.length; i++) {
    const item = data[i];
    content += `
        <div class="section ${item.class}">
            <h1 class="section-header">${item.title}</h1>
            <p class="section-description">${item.description}</p>
            <img class="section-img" src="${item.img}" alt="${item.title}-icon">
        </div>
    `;
}

// manupilate the DOM using innerHTML
sections.innerHTML = content;
