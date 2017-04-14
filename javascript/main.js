$(document).ready(function() {
  // initialize placeholders for variables to be manipulated
  // - in a higher scope in case used elsewhere
  var winTop;
  var headerBottom;
  var nav = $('#stickyNav');

  // listen for scroll event
  $(window).scroll(function(event) {
    // update window position variable values on every scroll
    winTop = $(window).scrollTop();
    headerBottom = $('#header').offset().top + $('#header').outerHeight();

    // check if nav should become sticky and lose stickiness
  	if(winTop - headerBottom > 0 && !$(nav).hasClass('glued')) {
  		$(nav).addClass("glued");
      $('body').addClass("glued-buffer");
  	} else if (winTop - headerBottom < -50 && $(nav).hasClass('glued')) {
      $(nav).removeClass("glued");
      $('body').removeClass("glued-buffer");
    } else {
      return;
    }
  });
});
