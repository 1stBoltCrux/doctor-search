
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import {apiCall} from './api.js'

let displaySearch = function(response){
  $("#output").empty();
  $("#output").append("hello" + response);
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
