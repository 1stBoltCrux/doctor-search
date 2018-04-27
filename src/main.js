
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';


$(document).ready(function(){
  $("#form1").submit(function(event){
    event.preventDefault();

    let searchInput = $("#searchInput").val();

  });
});
