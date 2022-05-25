// Title: Lab 15 AJAX.
// Description: We practiced using AJAX along
// author: Reece Mejia.
// date:May ,2022.


var endpoint = "http://www.yerkee.com/api/fortune/wisdom";

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
