$(document).ready(function() {
  // Picks Menu Functionality
  function showPicks (){
    $('#picks-menu ul.picks-menu-devices').slideToggle();
  }

  $('.picks-menu-devices-btn').on('click', showPicks);

  function showNav (){
    $('#main-nav ul.main-nav-devices').slideToggle();
  }

  $('.main-nav-devices-btn').on('click', showNav);

  // Flex Slider
  $('.flexslider').flexslider({
    animation: "slide",
    controlNav: "thumbnails"
  });

  // Picks tabs devices
  $('.picks-tabs-nav-devices li a#expertos-icon').on('click', function(){
    $('.picks-tabs-nav-devices li span').removeClass('active');
    $('.picks-tabs-nav-devices li span.expertos').addClass('active');
  });

  $('.picks-tabs-nav-devices li a#comprados-icon').on('click', function(){
    $('.picks-tabs-nav-devices li span').removeClass('active');
    $('.picks-tabs-nav-devices li span.comprados').addClass('active');
  });

  $('.picks-tabs-nav-devices li a#free-icon').on('click', function(){
    $('.picks-tabs-nav-devices li span').removeClass('active');
    $('.picks-tabs-nav-devices li span.free').addClass('active');
  });
});