// Title: Lab 15 AJAX.
// Description: We practiced using AJAX in our js code in order to ouput information from our chosen API.
// author: Reece Mejia.
// date:May 25,2022.


var endpoint = "https://www.yerkee.com/api/fortune/wisdom";

function getAjax(){
  $.ajax({
    url: endpoint,
    requestType: "GET",
    dataType: "json"
  })
  .done(function(data){
    $("#output").html(data.fortune);
  })
  .fail(function(request, error){
    $("#output").html("something is wrong.");
  })
}

$("button").click(getAjax);
