$(document).ready(function() {
  
  $('.usa-sidenav-list a').on('click', function(){
    $('.usa-sidenav-list a.usa-current').removeClass('usa-current');
    $(this).addClass('usa-current');
  });

  $('#proc, #revs, #ato, #testing').on('click', function() {
    if ($('#' + $(this).attr('id') + '-list').css('display') == 'none'){
      submenu_selector(this, 'show')
    } else {
      submenu_selector(this, 'hide')
    };
  });

  // The function actually applying the offset
  function offsetAnchor() {
      if(location.hash.length !== 0) {
          window.scrollTo(window.scrollX, window.scrollY - 200);
      }
  }

  // This will capture hash changes while on the page
  $(window).on("hashchange", function () {
      offsetAnchor();
  });

  // This is here so that when you enter the page with a hash,
  // it can provide the offset in that case too. Having a timeout
  // seems necessary to allow the browser to jump to the anchor first.
  window.setTimeout(function() {
      offsetAnchor();
  }, 1); // The delay of 1 is arbitrary and may not always work right (although it did in my testing).


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

