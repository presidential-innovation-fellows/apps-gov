$(document).ready(function() {
  
  $('.usa-sidenav-list > a').on('click', function(){
    console.log('test');
    $('.usa-sidenav-list a.usa-current').removeClass('usa-current');
    $(this).addClass('usa-current');
  });

});