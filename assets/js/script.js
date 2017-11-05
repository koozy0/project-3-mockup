$(document).ready(function() {
  // hide resto pin first
  $('#restoPin').hide();
  // login will show leftPane and show logut
  // logout will hide leftPane and show login
  var $loginLogout = $('#loginLogout')
  $loginLogout.on('click', function() {
    if($loginLogout.text() === 'Login') {
      $loginLogout.text('Logout')
      $('#leftPane').addClass('reveal');
      // $('#restaurant').addClass('show-resto');
    }
    else {
      $loginLogout.text('Login')
      $('#leftPane').removeClass('reveal');
      $('#restaurant').removeClass('show-resto');
      $('#restoPin').hide();
    }
  })

  // show restaurant pane and pin when clicking on groups
  var $restaurant = $('#restaurant');
  var $groupItems = $('.list-group-item');
  $groupItems.on('click', function() {
    if($restaurant.hasClass('show-resto')) {
      $restaurant.removeClass('show-resto');
      $('#restoPin').hide();
    }
    else {
      $restaurant.addClass('show-resto');
      $('#restoPin').show();
    }
  })

  // show and hide navbar
  $('#navbarSideButton').on('click', function() {
    $('#navbarSide').addClass('reveal');
    $('.overlay').show();
  });

  $('.overlay').on('click', function(){
    $('#navbarSide').removeClass('reveal');
    $('.overlay').hide();
  });
});
