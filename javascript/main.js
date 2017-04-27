$(document).ready(function() {
  var isMobile = false;

  // initialize placeholders for variables to be manipulated
  // - in a higher scope in case used elsewhere
  var winTop;
  var headerBottom;
  var nav = $('#stickyNav');
  var toggle = $('#toggleNav');

  // detect if mobile
  if (/Android|webOS|iPhone|iPad|BlackBerry|Windows Phone|Opera Mini|IEMobile|Mobile/i.test(navigator.userAgent)) {
	   isMobile = true;
  }

  // click handler for displaying hidden mobile nav
  $('#toggleNav').click(function(event) {
    if(!$('#stickyNav').hasClass('visible')) {
      $('#stickyNav').addClass("visible");
    } else {
      $('#stickyNav').removeClass("visible");
    }
  });

  // listen for scroll event
  $(window).scroll(function(event) {
    // update window position variable values on every scroll
    winTop = $(window).scrollTop();
    headerBottom = $('#header').offset().top + $('#header').outerHeight();

    // check if nav should become sticky and lose stickiness
  	if(winTop - headerBottom > 0 && !nav.hasClass('glued')) {
  		nav.addClass("glued");
      $('body').addClass("glued-buffer");
      toggle.addClass("nullify-toggle-margin");
  	} else if (winTop - headerBottom < -50 && nav.hasClass('glued')) {
      nav.removeClass("glued");
      $('body').removeClass("glued-buffer");
      toggle.removeClass("nullify-toggle-margin");
    } else {
      return;
    }
  });
});
