$(window).scroll(function (e) {
   var $el = $('#mainNav');
   var isPositionFixed = ($el.css('position') == 'fixed');
   if ($(this).scrollTop() > 200 && !isPositionFixed) {
      $el.css({ 'position': 'fixed', 'top': '0px', 'width': '100%', 'z-index': '1000' });
   }
   if ($(this).scrollTop() < 200 && isPositionFixed) {
      $el.css({ 'position': 'static', 'top': '0px', 'width': '100%', 'z-index': '1000' });
   }
});

