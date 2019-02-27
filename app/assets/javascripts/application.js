// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery3
//= require jquery_ujs
//= require activestorage
//= require turbolinks
//= require_tree .

$(document).ready(function(){

	$('.list-group a').each(function() {
		if ($(this).attr('data-read') === "false") {
			$(this).css('fontWeight', 'bold');
		}
		else {
			$(this).css('fontWeight', 'normal');
		}
	});
	
	$('.list-group a').click(function(e){
		var email_id = $(this).attr('data-id');

		$('.list-group a').removeClass('active');
		$('.card').removeClass('read');

		$(this).addClass('active');
		$("#"+email_id).addClass('read');
		$("#"+email_id).hide().fadeIn("slow");

		e.preventDefault();
	})


  	function fixDiv() {
    	var $cache = $('#getFixed');
    	if ($(window).scrollTop() > 100)
     	$cache.css({
        	'position': 'fixed',
        	'z-index': '1000',
        	'left': '50%',
        	'width': '40%',
        	'top': '100px'
      	});
    	else
      	$cache.css({
      	});
  	}
  	$(window).scroll(fixDiv);
  	fixDiv();

})

