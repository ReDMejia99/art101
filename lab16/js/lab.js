// Title: Lab 16 JSON and APIS.
// Description: We practiced using AJAX as well as Json in our js code in order to ouput information from an API to customize a site for the comic.
// author: Reece Mejia.
// date:May 29,2022.


var endpoint ="https://xkcd.com/info.0.json";
function getAjax(){
  $.ajax({
    url:endpoint,
    type:"GET",
    data: {


    }
  })
  .done(function(comicObj){
    console.log("worked!");
    var title =
    $("#output").append("<h3>" + comicObj.title + "</h3>");
      $("#output").append("<img src = " + comicObj.img + ">");
          $("#output").append("<p>" + comicObj.alt);
  })
  .fail(function(request, error){
    $("#output").html("Something messed up.");
  })
}
$("button").click(getAjax);

activate.style.backgroundColor = "#A19AD1";
activate.style.color = "white";
