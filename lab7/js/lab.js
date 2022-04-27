// Title: Lab 7 Functions.
// Description: In this lab my partner and I experimented with functions in order to create a window login for our website.
// author: Reece Mejia.
// date:April 27,2022.
// sortPassword- a function that takes user input and sorts the letters
// of their chosen password.
function sortPassWord() {
  var passWord = window.prompt ("Hi. Enter your password to proceed.");
  console.log("passWord =", passWord);
  // split string to array
  var passWordArray = passWord.split('');
  console.log("passWordArray =", passWordArray);
  // sort the array
  var passWordArraySort = passWordArray.sort();
  console.log("passWordArraySort =", passWordArraySort);
  // join array back to a string
  var passWordSorted = passWordArraySort.join('');
  console.log("passWordSorted = ", passWordSorted);
  //passWord.toLower().split("").sort().join("")
  return passWordSorted;
}
  // output
document.writeln("Welcome to our lab here is your password for the day(scrambled up for your privacy): ",
  sortPassWord(),"</br>");
