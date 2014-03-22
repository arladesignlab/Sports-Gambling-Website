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

//// Functionality For Sub navigation /////
////////////////////////////////////////////////////////////////////////////////////////
  $(".soccer-cat").data( 'sub-menu', 'soccer-nav' );
  $("#soccer-nav").data( 'nav', '.soccer-cat' );

  $(".americano-cat").data( 'sub-menu', 'americano-nav' );
  $("#americano-nav").data( 'nav', '.americano-cat' );

  $(".baseball-cat").data( 'sub-menu', 'baseball-nav' );
  $("#baseball-nav").data( 'nav', '.baseball-cat' );

  $(".basketball-cat").data( 'sub-menu', 'basketball-nav' );
  $("#basketball-nav").data( 'nav', '.basketball-cat' );

  $(".box-cat").data( 'sub-menu', 'box-nav' );
  $("#box-nav").data( 'nav', '.box-cat' );

  $(".tennis-cat").data( 'sub-menu', 'tennis-nav' );
  $("#tennis-nav").data( 'nav', '.tennis-cat' );

  $(".nav-item").mouseover(function() {
    //turn off all sub navs
    $(".sub-menu").css( 'display', 'none' );  
    //turn off all nav items
    $(".nav-item").toggleClass( 'on', false );
    //turn on this nav item
    $(this).toggleClass( 'on', true );
    // turn on this sub nav
    $( '#' +  $(this).data('sub-menu') ).css( 'display', 'block' );
    //console.log( '#' + $( $(this).data('sub_nav') ) );
    //console.log( $(this).data('sub_nav') );
    //alert("Handler for .click() called.");
    return false;
  });

  $(".nav-item").mouseout(function(){
    //turn off all sub navs
    $(".sub-menu").css( 'display', 'none' );    
    //turn off all nav items
    $(".nav-item").toggleClass( 'on', false );
  });

  $(".sub-menu").mouseover(function() {   
    $( $(this).data('nav') ).toggleClass( 'on', true );
    $(this).css( 'display', 'block' );    
  });
  $(".sub-menu").mouseout(function() {
    $( $(this).data('nav') ).toggleClass( 'on', false );
    $(this).css( 'display', 'none' );   
  });

  //Login Functionality
  function showLogin(){
    $('#login-dropdown').slideToggle();
  }
  $('#login button.btn-link').on('click', showLogin);

  //Login Functionality
  function perfilShow(){
    $('#perfil-dropdown').slideToggle();
  }
  $('#perfil button.btn-link').on('click', perfilShow);
});