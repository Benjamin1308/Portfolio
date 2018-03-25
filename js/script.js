$(document).ready(function(){
	$(".nav-item").on('click', function(){
			$(".active").removeClass("active");
			$(this).addClass("active");	
	});
	$('.toggle').on('click', function(){
		$(this).toggleClass('active');
		$('.nav-bar').toggleClass('opened');
	});
	$('.input-item').on('focus', function(){
			$(this).parent().addClass("form-item-focus");
	});
	$('.input-item').on('blur', function(){
			$(this).parent().removeClass("form-item-focus");
	});
	$("body").on('input propertychange', '.form-item', function(e) {
			$(this).toggleClass("form-item-filled",!! $(e.target).val());
	});
	$('body').scrollspy({target: '.nav-bar'})
	var sections = $('section')
	, nav = $('nav')
	, nav_height = nav.outerHeight();
 
	$(window).on('scroll', function () {
	  var cur_pos = $(this).scrollTop();
	 
	  sections.each(function() {
	    var top = $(this).offset().top - nav_height - 80,
	        bottom = top + $(this).outerHeight();
	 
	    if (cur_pos >= top && cur_pos <= bottom) {
			nav.find('a').removeClass('active');
			$(this).addClass('active');
			nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
	    }
	  });
	});
});
