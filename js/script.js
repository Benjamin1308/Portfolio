$(document).ready(function(){
  $("#active").focus();
  $('.toggle').on('click', function(){
		$(this).toggleClass('active');
		$('.nav-bar').toggleClass('opened');
	});
});
