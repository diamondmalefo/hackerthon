const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "this is addedd text";
//paragraph
const para = document.createElement("p");
para.style.color = "red";
para.textContent = "hey! im red";
//h3
const head3 = document.createElement("h3");
head3.textContent = "hey! im blue";
head3.style.color = "blue";

const borderDiv = document.createElement("div");
borderDiv.style.border = "black";
borderDiv.style.backgroundColor = "pink";
const divH1 = document.createElement("h1");
divH1.textContent = "Im in a div";
borderDiv.appendChild(divH1)
const divp1 = document.createElement("p");
divp1.textContent = "me too!";
borderDiv.appendChild(divp1)


container.appendChild(head3);
container.appendChild(para);
container.appendChild(content);
container.appendChild(borderDiv);