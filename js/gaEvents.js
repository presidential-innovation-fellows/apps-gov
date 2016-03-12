$('#contact').on('click', function() {
  ga('send', 'event', 'apps', 'product', 'contact');
});
$('#github').on('click', function() {
  ga('send', 'event', 'apps', 'product', 'edit');
});
$('#tag').on('click', function() {
  ga('send', 'event', 'apps', 'product', 'tag');
});
// $('#search-form').submit(function(event) {
//   console.log(event);
// })
// $("#search-field-big").keyup(function(event){
//     if(event.keyCode == 13){
//         console.log('test');
//         event.preventDefault();
//     }
// });