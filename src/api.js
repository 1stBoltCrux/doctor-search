import $ from 'jquery';




export function apiCall(displaySearch, searchInput, searchError) {

  $.get(`https://api.betterdoctor.com/2016-03-01/doctors?query=${searchInput}&location=or-portland&skip=0&limit=25&user_key=76773493dc43790b2f7bbcb11b51a0b3`).then(function(response){
    console.log(response);
    displaySearch(response);
  }).fail(function(){
  searchError();
  })
}
