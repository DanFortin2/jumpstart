$(document).ready(function () {
  /*carasoul from slick*/
  $('.carasoul').slick({
    slidesToScroll: 1,
    autoplay: true,
    autoplayspeed: 4000,
    arrows: false,
    draggable: false,
    infinite: true,
    pauseOnFocus: false,
    pauseOnHover: false,
  });

/*collapsable scroll bar*/
/*set scroll to 0*/
  var $scrollUp = 0;
  /*captue window and scroll event set function*/
  $(window).scroll(function() {
    /*when user scrolls set variable to this window with scroll top function*/
    var $scrollDown = $(this).scrollTop();
    /*if user scroll minus original scroll is greater than 50*/
    if ($scrollDown - $scrollUp > 50) {
      /*grab navbar element in HTML and height from CSS to equal variable*/
      var $navHeight = $('.navbar').css('height');
      /*take navbar and minus the navheight ex. top -150, over 150 ms*/
    $('.navbar').animate({top: '-' + $navHeight}, 150);
    /*now set the original scroll value to the variable scroll value*/
    $scrollUp = $scrollDown;
    /*now if origin scroll value subtracted by variable scroll value is greater than 50*/
    } else if ($scrollUp - $scrollDown > 50) {
      /*then animate scroll bar and put the top back to 0px to show the bar again over 150ms*/
      $('.navbar').animate({top: '0px'}, 150);
      /*set the origin scroll value to variable scroll value, rinse and repeat starting above*/
      $scrollUp = $scrollDown;
    }
  });
});
