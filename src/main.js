
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import {apiCall} from './api.js'

let displaySearch = function(response){
  $("#output").empty();
  for (var i = 0; i < response.data.length; i++) {
    $("#output").append("<p>" + response.data[i].profile.bio + "</p>");
  }

}
let searchError = function(){
  $("#output").empty();
  $("#output").text("There has been an error! Please try again later.");
}


$(document).ready(function(){
  $("#form1").submit(function(event){
    event.preventDefault();

    let searchInput = $("#searchInput").val();
    apiCall(displaySearch, searchInput, searchError);
  });
});
