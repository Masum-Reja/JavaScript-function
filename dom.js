console.log("hi dom");
document.getElementById("idName").style.fontSize = "16px";
document.getElementById("idName").style.textAlign = "center";
document.getElementById("idName").style.listStyle = "none";

document.getElementById("jantoos").style.background = "lightgray";
document.getElementById("jantoos").style.border = "2px solid blue";
document.getElementById("jantoos").style.borderRadius = "10px";
document.getElementById("jantoos").style.padding = "10px";

const ol = document.createElement("ol");
const h1 = document.createElement("h1");
h1.innerText = "New Item Add";
jantoos.appendChild(h1);
jantoos.appendChild(ol);

const li1 = document.createElement("li");
li1.innerText = "Ma";
ol.appendChild(li1);

const li2 = document.createElement("li");
li2.innerText = "Meye";
ol.appendChild(li2);

document.getElementById("sec").style.border = "2px solid black";
document.getElementById("sec").style.borderRadius = "10px";
document.getElementById("sec").style.color = "red";
