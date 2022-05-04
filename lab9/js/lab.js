// Title: Lab 9 JavaScript for the Web
// Description: In this lab my partner and I experimented with elements in the web.
// author: Reece Mejia.
// date:May 4,2022.

var outputEl = document.getElementById("title");

var new1El = document.createElement("button");

new1El.innerHTML = "ouch!";

outputEl.appendChild(new1El)

var output2El = document.getElementById("pic");

var new2El = document.createElement("p");

new2El.innerHTML = "This is our other created element"

output2El.appendChild(new2El)
