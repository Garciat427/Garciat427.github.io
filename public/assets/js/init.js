(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();
    AOS.init();

    
  }); // end of document ready
})(jQuery); // end of jQuery name space

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.scrollspy');
  var instances = M.ScrollSpy.init(elems, {
    throttle : 100000
  });
  console.log(instances)
});