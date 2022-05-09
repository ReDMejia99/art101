// Title: Lab 10 JavaScript Events and Forms
// Description: In this lab my partner and I learned how to create a function that would take information inputted within a prompted window and replace our output with that information.
// author: Reece Mejia.
// date:May 9,2022.


//Find the element.
var button = document.getElementById('my-button');

//Tell the function what to do. In this case the user will be asked to input their name with the prompt function.
function sayTheName(){
	var name = prompt('Input Your Name');
	var h1 = document.querySelector('h1');
  //The inputted information will replace "Hello World" with "Hello + the user's name."
	h1.innerText = "Hello " + name;
}
//This will listen for a button click and then bring up the prompt window for inputting the user's name.
button.addEventListener('click', sayTheName);

button.style.backgroundColor = "green";
button.style.color = "black";
