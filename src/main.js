
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
    let areTheyAcceptingNewPatients;
    console.log(response.data[i].practices[0].accepts_new_patients);
    if (response.data[i].practices[0].accepts_new_patients === true) {
      areTheyAcceptingNewPatients = "This doctor is currently accepting new patients."
    } else {
      areTheyAcceptingNewPatients = "This doctor is not currently accepting new patients."
    }
    $("#output").append("<ul>" + "<li>" + "First name: " + response.data[i].profile.first_name + "</li>" +
                                 "<li>" + "Last name: " + response.data[i].profile.last_name + "</li>" +
                                 "<li>" + response.data[i].practices[0].visit_address.city + "</li>" +
                                 "<li>" + response.data[i].practices[0].visit_address.state + "</li>" +
                                 "<li>" + response.data[i].practices[0].visit_address.street + "</li>" +
                                 "<li>" + response.data[i].practices[0].visit_address.zip + "</li>" +
                                 "<li>" + "Phone number: " + response.data[i].practices[0].phones[0].number + "</li>" +
                                 "<li>" + areTheyAcceptingNewPatients + "</li>" +
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
