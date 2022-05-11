// Title: Lab 11 Libraries and jQuery.
// Description: In this lab my partner and I experimented with using jQuery to create buttons that would change the attributes of an element from css with the toggle function.
// author: Reece Mejia.
// date:May 11,2022.


$("#challenges").append("<button id='challenges-button'>Press Me</button>")

$("#challenges-button").click(function(){
	$("#challenges").toggleClass("special");
});


$("#problems").append("<button id='problems-button'>Press Me</button>")

$("#problems-button").click(function(){
	$("#problems").toggleClass("special");
});

$("#results").append("<button id='results-button'>Press Me</button>")

$("#results-button").click(function(){
	$("#results").toggleClass("special");
});
