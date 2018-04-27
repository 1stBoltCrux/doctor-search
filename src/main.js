
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import {apiCall} from './api.js'

let displaySearch = function(response){
  $("#output").empty();
  if ( response.data.length <= 0) {
    $("#output").text("Sorry, your search criteria does not return any results.")
  }
  for (var i = 0; i < response.data.length; i++) {

    $("#output").append("<ul>" + "<li>" + "First name: " + response.data[i].profile.first_name + "</li>" +
                                 "<li>" + "Last name: " + response.data[i].profile.last_name + "</li>" +
                                 "<li>" + response.data[i].practices[0].visit_address.city + "</li>" +
                                 "<li>" + response.data[i].practices[0].visit_address.state + "</li>" +
                                 "<li>" + response.data[i].practices[0].visit_address.street + "</li>" +
                                 "<li>" + response.data[i].practices[0].visit_address.street2 + "</li>" +
                                 "<li>" + response.data[i].practices[0].visit_address.zip + "</li>" +
                                 "</ul>" +
                                 "<p>" + response.data[i].profile.bio + "</p>");
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
