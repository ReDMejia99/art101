// Title: Lab 6 Arrays and Objects.
// Description: In this lab we are practicing using JavaScript arrays and objects.
// author Reece Mejia.
// date:April 21,2022.


// Define variables
myTransport = ["gray Kia", "longboard", "bus"];

myMainRide = {
color: "gray",
make: "Kia",
model: "Soul",
year: 2015,
age: 7;
  }

// output
document.writeln("Kinds of Transportation I Use: ", myTransport, "</br>");
document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
