$(window).load(function(){
	//Loading Effect
	$('.loading-page .loading').delay(100).fadeOut();
	$('.loading-page').delay(200).fadeOut('slow');

	//Functions
	navigation_scroll();

	//grelha isotope
	$('#portfolio-grid').isotope({
	  itemSelector: '.grid-item',
	  layoutMode: 'fitRows'
	});
	
});



$(document).ready(function() {
	//para melhorar efeito do menu
	function show_hide_menu(){
		if($('#menu').hasClass('menu-open')){
			$(document).find('.menu-bar').addClass('menu-active');
			$(document).find('.menu-bar').removeClass('menu-hidden');
		}
		else{
			$(document).find('.menu-bar').removeClass('menu-active');
			$(document).find('.menu-bar').addClass('menu-hidden');
		}
	}


	//Menu Button Function
	$('.btn-menu').on('click', function(event) {
		event.preventDefault();
		$(this).toggleClass('menu-open');
		$('#menu').toggleClass('menu-open');

		show_hide_menu();
	});


	//When click on a
	$('#menu').find('a').on('click', function(){
		//event.preventDefault();
		$('#menu').toggleClass('menu-open');
		$('.btn-menu').toggleClass('menu-open');
		show_hide_menu();
		
	});


	$(window).scroll(function(){
		if ($(window).scrollTop() > 10) {
			$('.menu-bar').addClass('menu-scroll');
		}
		else {
			$('.menu-bar').removeClass('menu-scroll');
			$('.menu-hidden').css('transition-delay', '0s');
		};
	});

	



	//Owl carousel
	$("#owl-demo").owlCarousel({
		slideSpeed : 350,
		singleItem: true,
		autoHeight: true,
		navigation: true,
		navigationText: ["<i class='fa fa-angle-left fa-3x'></i>", "<i class='fa fa-angle-right fa-3x'></i>"]
	});

});



//ScrollTo
function navigation_scroll(){
	
	$("#navigation, .logo").localScroll({
		target: "body",
		duration: 1000,
		offset: (-80) //tamanho do menu
	});
}



/*
File 1 ok
*/