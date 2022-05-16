// Title: Lab 12 Conditionals.
// Description: In this lab my partner and I worked with functions and combined them with conditionals.
// author: Reece Mejia.
// date:May 16,2022.


// Return Gryffindor, Ravenclaw, Slytherin, and Hufflepuff
// depending on length mod 4
function theReaping(str) {
len = str.length;
mod = len % 4;
if (mod == 0) {
	return "District 1"
}
else if (mod == 1) {
	return "District 2"
}
else if (mod == 2) {
	return "District 12"
}
else if (mod == 3) {
return "District 11"
}
}
var myButton = document.getElementById("button") ;
myButton.addEventListener("click",function() {
	var name = document.getElementById("input").value;
	var district = theReaping(name);
	newText = "<p> You have been chosen to represent " + district + "</p>";
	document.getElementById("output").innerHTML = newText;
})
