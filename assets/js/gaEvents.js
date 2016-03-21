$('#contact').on('click', function() {
  ga('send', 'event', 'apps', 'product', 'contact');
});
$('#github').on('click', function() {
  ga('send', 'event', 'apps', 'product', 'edit');
});
$('#tag').on('click', function() {
  ga('send', 'event', 'apps', 'product', 'tag');
});

$('#hero-search-form').on('submit', function(event){
  ga('send', 'event', 'apps', 'search', 'hero');
});

$('#product-search-form').on('submit', function(event){
  ga('send', 'event', 'apps', 'search', 'product');
});