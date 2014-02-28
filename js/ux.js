$(document).ready(function() {
	$('#banner-slider').unslider({
		speed: 500,
		delay: 5000,
		complete: function() {},  //  A function that gets called after every slide animation
		keys: false,               //  Enable keyboard (left, right) arrow shortcuts
		dots: true,               //  Display dot navigation
		fluid: true,
	});

  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});