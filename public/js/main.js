$(document).ready(function(){
	// Hover to show info
	$("#roy-hover").hover(function(){
		$("#roy-cover").fadeIn();
	}, function(){
		$("#roy-cover").fadeOut();
	});

	$("#xenia-hover").hover(function(){
		$("#xenia-cover").fadeIn();
	}, function(){
		$("#xenia-cover").fadeOut();
	});

	$("#roy-hover").click(function(){
		$(".center-container").css('left', '100%');
	});

	$("#xenia-hover").click(function(){
		$(".center-container").css('left', '0');
	});
})