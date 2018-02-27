$(document).ready(function(){

	$(window).scroll(function() {
	      if ($(this).scrollTop() > 350) {
	      $('.bg-dark').addClass('nav-scroll').fadeIn();
	      $('.navbar').css({
	      	'box-shadow': '0px 3px 30px -1px rgba(0,0,0,0.75)',
	      	'color': 'white'
	      	}).fadeIn();
	    	} else {
	    		$('.bg-dark').removeClass('nav-scroll');
	    		$('.navbar').css('box-shadow', 'none')
	    	}
	})

});
