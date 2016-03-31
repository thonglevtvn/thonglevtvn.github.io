$( document ).ready(function(){

	$(".button-projects").click(function(event)
		{
			// var goTop = 300;
			event.preventDefault();
			var goTop = $(".projects").offset().top;
			// console. log($(".projects").offset().top);
			$("html, body").animate({scrollTop:goTop},1000, "easeInOutQuart" );
	});

	$(".button-home").click(function (event){
		event.preventDefault();
		var goTop = $(".splash").offset().top;
		$("html, body").animate({scrollTop:goTop}, 1000, "easeInOutQuart");
	});

$(".button-about").click(function(event){
	event.preventDefault();
	var goTop = $(".about").offset().top;
	$("html, body").animate({scrollTop:goTop}, 1000, "easeInOutQuart");
});

$(".button-contact").click(function(event){
	event.preventDefault();
	var goTop = $(".contact").offset().top;
	$("html,body").animate({scrollTop:goTop}, 1000, "easeInOutQuart");

});


window.sr = ScrollReveal();
sr.reveal('.splash .header');
sr.reveal('.splash .description', {duration: 1000});














});