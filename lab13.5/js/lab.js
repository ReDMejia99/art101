// Title: Lab 13 Loops.
// Description: In this lab my partner and I worked with loops.
// author: Reece Mejia.
// date:May 18,2022.


outputEl = document.getElementById("output");
myButton = document.getElementById("button");


function fizzBuzzBoom() {
for (i = 1; i <= 200; i++){
  first = i % 3;
  second = i % 5;
  third = i % 7;
  fourth = i % 105;
  fifth = i % 22;
  firststr = "";
  secondstr = "";
  thirdstr = "";
  fourthstr = "";
  fifthstr = "";

  if (!first) {
  	firststr = "Fizz!";
  }
  if (!second){
  	secondstr = "Buzz!";
  }
  if (!third){
  	thirdstr = "Boom!";
  }
  if (!fourth){
  	fourthstr= "Bam!";
  }
  if (!fifth){
    fifthstr= "Whoah!";
  }
  outstr = firststr + secondstr + thirdstr + fourthstr + fifthstr + "<br>";

  $("#output").append(i.toString()+":"+outstr+"<hr>");
  }
}
myButton.addEventListener("click", fizzBuzzBoom);

button.style.backgroundColor = "#EDCB9C";
button.style.color = "#E05834";
