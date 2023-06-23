const paragraphTag = document.createElement("p");

const paragraphText = document.createTextNode("Paragraph Tag 2");

paragraphTag.appendChild(paragraphText);

document.body.appendChild(paragraphTag);

const headingTag = document.querySelector("h1");

// console.log(headingTag.innerText);

// headingTag.innerText = "Manipulation!";

console.log(headingTag.innerHTML);

headingTag.innerHTML = "Manipulation! <span>working</span>";
