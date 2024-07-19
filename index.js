
import data from "./data.js"
const sections = document.getElementById("sections")


for (let i = 0; i < data.length; i++){
    const container = 
                        `
                        <div class = "section ${data[i].class}"
                         >
                            <h1 class = "section-header">${data[i].title}</h1>
                            <p class = "section-description">${data[i].description}</p>
                            <img class = "section-img" src = ${data[i].img} alt = "${data[i].title}-icon">
                        </div>
                        `

    sections.innerHTML += container 
}