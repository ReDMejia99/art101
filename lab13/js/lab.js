// Title: Lab 13 Loops.
// Description: In this lab my partner and I worked with loops.
// author: Reece Mejia.
// date:May 18,2022.




function fizzBuzzBoom (maxNums, factorobj) {

for (var num=0; num<maxNums; num++)

var outputStr="";
for (var factor in factorObj) {
if (num % factor == 0){
outputStr += factorObj[factor];
}
}
if (outputstr) {
outputStr = " - " + outputstr + "!";
}
outputToPage(num.toString() + outputStr)
}

function reportError(str){
}
outputStr.innerHTML = "<div class='error'>" + str + "</div>";
document.getElementBvId ("submit") .addEventListener ("click", fizzBuzzBoom);
var max = document. getElementById ("max"). value;
console.log("max:", max)
if (! max){
reportError("you must provide a maximum")
}
