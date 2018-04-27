
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
    console.log(response.data[i].practices[0].website);
    if (response.data[i].practices[0].accepts_new_patients === true) {
      areTheyAcceptingNewPatients = "This doctor is currently accepting new patients."
    } else {
      areTheyAcceptingNewPatients = "This doctor is NOT currently accepting new patients."
    }
    if (response.data[i].practices[0].website === undefined) {
       response.data[i].practices[0].website = "There is no website available for this practice."
    }
    $("#output").append("<div class='doctorInfo card'>" + "<h3 class='doctorName'>" +  response.data[i].profile.first_name + " " + response.data[i].profile.last_name + "</h3>" +
                              "<div class='infoBody card-header'" +  "<p>" + response.data[i].practices[0].visit_address.city + " , " +
                                  response.data[i].practices[0].visit_address.state + "</p>" +
                                  response.data[i].practices[0].visit_address.street + " , " +
                                  response.data[i].practices[0].visit_address.zip + "</p>" +
                                 "<p>" + "Phone number: " + response.data[i].practices[0].phones[0].number + "</p>" +
                                 "<p>" + "Website: " + response.data[i].practices[0].website + "</p>" +
                                 "<p>" + areTheyAcceptingNewPatients + "</p>" +

                                 "<p>" + response.data[i].profile.bio + "</p>" + "</div>" + "</div>");
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
