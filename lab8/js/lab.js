// Title: Lab 8 Anon Functions and Callbacks
// Description: In this lab my partner and I experimented with functions to learn how to use callback functions.
// author: Reece Mejia.
// date:May 1,2022.


function myMultiply(x){
    return ( x * 2);
}

// test function
console.log("What is 3 multiplied by 2?", myMultiply(3));
console.log("What is 12 multiplied by 2?", myMultiply(12));

array = [2,4,10,11]
console.log("My Array", array);

var result = array.map(myMultiply);
// should return [4, 8, 20, 22]
console.log("Test of array callback functions:", result);

var result = array.map(function(x){
    return x + 2;
})
// should return [4, 6, 12, 13]
console.log("Array with an addition of 2 to each number:", result);

// [4,8,20,22]
