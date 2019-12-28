$(document).ready(function(){
	
	var headerHeight = $('#header').height()

	// highlight link corresponding to section on screen
	// when user scrolls
	$(window).scroll(function(){
		// scroll pos of current window
		var currScroll = $(document).scrollTop();

		var currSection;

		$('.section').each(function(){
			// this section's offset from top
			var secScroll = $(this).offset().top;

			// if we've scrolled past this section, set it to curr
			if (secScroll - headerHeight - 1 <= currScroll){
				currSection = $(this);
			}
		})

		// remove active tag
		$('.section-link').removeClass('active');

		// highlight active section
		var id = currSection.attr('id');
		$('a[href="#'+id+'"]').addClass('active');
	})

	// slowly scroll to clicked section
	$('.section-link').click(function(){
		// id of clicked section
		var id = $(this).attr('href');

		$('html').animate({
			scrollTop: $(id).offset().top - headerHeight
		}, 800);
	})
})