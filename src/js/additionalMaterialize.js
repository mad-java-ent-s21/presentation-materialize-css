// Mobile Collapse Button
// document.addEventListener('DOMContentLoaded', function() {
//    var elems = document.querySelectorAll('.sidenav');
//    var instances = M.Sidenav.init(elems, options);
//  });

 $(document).ready(function(){
     $('.sidenav').sidenav();
 });


//Navbar Dropdown Menu
$(document).ready(function) {
  $(".dropdown-trigger").dropdown();
}

//CAROUSEL
$(document).ready(function(){
  $('.carousel').carousel();
});


//selection forms
$(document).ready(function(){
    $('select').formSelect();
  });
