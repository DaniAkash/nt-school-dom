const paragraphTag = document.createElement("p");

const paragraphText = document.createTextNode("Paragraph Tag 2");

// paragraphTag.innerText = "Paragraph Tag 2";

paragraphTag.appendChild(paragraphText);

document.body.appendChild(paragraphTag);

// paragraphTag.remove();

paragraphTag.classList.add("circle");
paragraphTag.classList.add("error");

// const headingTag = document.querySelector("h1");

// console.log(headingTag.innerText);

// headingTag.innerText = "Manipulation!";

// console.log(headingTag.innerHTML);

// headingTag.innerHTML = "Manipulation! <span>working</span>";
