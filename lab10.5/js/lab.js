// Title: Lab 10 JavaScript Events and Forms
// Description: In this lab my partner and I learned how to create a function that would take information inputted within a prompted window and replace our output with that information.
// author: Reece Mejia.
// date:May 9,2022.


//Find the element.


var button = document.getElementById('my-button');

function sayTheName(){
	var inputText = document.getElementById('user-name').text;
var h1 = document.querySelector('h1');
h1.innerText = "Hello " + name;
}

	button.addEventListener('click', sayTheName(){
    inputValue = document.getElementById('user-name').value;
    console.log("Input Your Name:", inputValue);

});
