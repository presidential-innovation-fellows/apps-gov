$(document).ready(function() {
  
  $('.usa-sidenav-list a').on('click', function(){
    $('.usa-sidenav-list a.usa-current').removeClass('usa-current');
    $(this).addClass('usa-current');
  });

  $('#proc, #certs, #ato, #testing').on('click', function() {
    if ($('#' + $(this).attr('id') + '-list').css('display') == 'none'){
      submenu_selector(this, 'show')
    } else {
      submenu_selector(this, 'hide')
    };
  });

  /* Isotope stuff */
  // var $container = $('#product-list');

  // $container.imagesLoaded(function(){
  //   $container.isotope({
  //     itemSelector: '.product-list-item',
  //     layoutMode: 'masonry'
  //   });
  // });

  // var filters = {};

  // $('#filters').on( 'click', 'button', function() {
  //   var $this = $(this);

  //   // get group key
  //   var $buttonGroup = $this.parents('.button-group');
  //   var filterGroup = $buttonGroup.attr('data-filter-group');
  //   // set filter for group
  //   filters[ filterGroup ] = $this.attr('data-filter');
  //   // combine filters
  //   var filterValue = '';
  //   for (var prop in filters) {
  //     filterValue += filters[ prop ];
  //   }
  //   // set filter for Isotope
  //   $container.isotope({ filter: filterValue });
  // });
  
  // // change active class on buttons
  // $('#filter-service-type').each(function(i,buttonGroup){
  //   var $buttonGroup = $(buttonGroup);
  //   $buttonGroup.on('click', 'button', function(){
  //    $buttonGroup.find('.active').removeClass('active').removeClass('btn-primary').addClass('btn-default');
  //    $(this).addClass('active').removeClass('btn-default').addClass('btn-primary').blur();
  //   })
  // })
  // $('#filter-category').each(function(i,buttonGroup){
  //   var $buttonGroup = $(buttonGroup);
  //   $buttonGroup.on('click', 'button', function(){
  //    $buttonGroup.find('.active').removeClass('active').removeClass('btn-primary').addClass('btn-default');
  //    $(this).addClass('active').removeClass('btn-default').addClass('btn-primary').blur();
  //   })
  // })
  // $('#filter-certification').each(function(i,buttonGroup){
  //   var $buttonGroup = $(buttonGroup);
  //   $buttonGroup.on('click', 'button', function(){
  //    $buttonGroup.find('.active').removeClass('active').removeClass('btn-primary').addClass('btn-default');
  //    $(this).addClass('active').removeClass('btn-default').addClass('btn-primary').blur();
  //   })
  // })


  // isotope condition for tablet and phone
  // $(window).resize(function(){
  //   if ($(window).width() <= 991 ) {
  //     $container.isotope({ filter: '' });

  //     $('#region').each(function(i,buttonGroup){
  //       var $buttonGroup = $(buttonGroup);
  //       if ( $buttonGroup.find('.active').text() != 'All Regions' ) {
  //         $(this).find('.active').removeClass('active').removeClass('btn-primary').addClass('btn-default');
  //         $buttonGroup.children().first().addClass('active').removeClass('btn-default').addClass('btn-primary').blur();
  //       }
  //     });
  //     $('#skill').each(function(i,buttonGroup){
  //       var $buttonGroup = $(buttonGroup);
  //       if ( $buttonGroup.find('.active').text() != 'All Skills' ) {
  //         $(this).find('.active').removeClass('active').removeClass('btn-primary').addClass('btn-default');
  //         $buttonGroup.children().first().addClass('active').removeClass('btn-default').addClass('btn-primary').blur();
  //       }
  //     });
  //   }
  // });

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