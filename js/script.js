$(document).ready(function(){
  $("#active").focus();
  $('.toggle').on('click', function(){
		$(this).toggleClass('active');
		$('.nav-bar').toggleClass('opened');
	});
  $('.input-item').on('focus', function(){
  		$(this).parent().addClass("form-item-focus")
  });
  $('.input-item').on('blur', function(){
  		$(this).parent().removeClass("form-item-focus")
  });
 $("body").on('input propertychange', '.form-item', function(e) {
  		$(this).toggleClass("form-item-filled",!! $(e.target).val());;
  });

});
