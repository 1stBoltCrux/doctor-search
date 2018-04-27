import $ from 'jquery';




export function apiCall(displaySearch, searchInput, searchError) {

  $.get(`https://api.betterdoctor.com/2016-03-01/doctors?query=${searchInput}&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=76773493dc43790b2f7bbcb11b51a0b3`).then(function(response){
    console.log(response);
    displaySearch(response);
  }).fail(function(){
  searchError();
  })
}
