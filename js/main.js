$(document).ready(function() {
  
  $('.usa-sidenav-list a').on('click', function(){
    $('.usa-sidenav-list a.usa-current').removeClass('usa-current');
    $(this).addClass('usa-current');
  });

  $('#contracts, #certs, #ato, #testing').on('click', function() {
    if ($('#' + $(this).attr('id') + '-list').css('display') == 'none'){
      submenu_selector(this, 'show')
    } else {
      submenu_selector(this, 'hide')
    };
  });

});

function submenu_selector(id, setting){ 
  if (setting == 'show') {
    $('#' + $(id).attr('id') + '-list').css('display','inherit');
    $(id).find('.fa').removeClass('fa-angle-down').addClass('fa-angle-up');
  } else {
    $('#' + $(id).attr('id') + '-list').css('display','none');
    $(id).find('.fa').removeClass('fa-angle-up').addClass('fa-angle-down');
  }
}