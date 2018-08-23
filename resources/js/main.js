$(document).ready(function() {
  $('.carousel').slick({
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    draggable: false,
    pauseOnFocus: false,
    pauseOnHover: false
  });

  var userScrolled = 0;
  $(window).scroll(function() {
    var scrollTopVal = $(this).scrollTop();
    if (scrollTopVal - userScrolled > 50) {
      var navHeight = $('.navbar').css('height');
      $('.navbar').animate({top: '-' + navHeight}, 150);
      userScrolled = scrollTopVal;
    } else if (userScrolled - scrollTopVal > 50) {
      $('.navbar').animate({top: '0px'}, 150);
      userScrolled = scrollTopVal;
    }
  });
});
