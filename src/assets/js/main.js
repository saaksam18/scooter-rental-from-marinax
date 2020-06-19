$(document).ready(function () {
	$('.pickup-slide').slick({
		centerMode: true,
		centerPadding: '60px',
		slidesToShow: 3,
		autoplay: true,
		autoplaySpeed: 2000,
		arrows: true,
		prevArrow: "<img class='a-left control-c prev slick-prev' style='position: absolute;z-index: 2;height: 100%;mix-blend-mode: multiply;' src='assets/images/prev-arrow.svg'>",
		nextArrow: "<img class='a-right control-c next slick-next' style='position: absolute;z-index: 2;right: 0;top: 0;height: 100%;mix-blend-mode: multiply;' src='assets/images/next-arrow.svg'>",
		responsive: [
			{
				breakpoint: 768,
				settings: {
					centerPadding: '0px',
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					centerPadding: '0px',
				}
			},
			{
				breakpoint: 320,
				settings: {
					slidesToShow: 1,
					centerPadding: '0px',
				}
			}
		]
	});

	$(window).on("load scroll resize", function () {
		// About us page title animation
		$(".trigger").each(function () {
			var imgPos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			$(this).removeClass("is-show");
			if (scroll > imgPos - windowHeight + windowHeight / 2) {
				$(this).addClass("is-show");
			}
		});

		// animatin title with border left
		$(".title-borderleft").each(function(){
			var imgPos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			$(this).removeClass("is-show");
			if (scroll > imgPos - windowHeight + windowHeight / 4){
			  $(this).addClass("is-show");
			}
		});
	});
	
	menuResponsive(); 

	ChangeFontsize();
	
	SwitchLang();

});

function menuResponsive() {
	$(".sidebar__logo a ").click(function(){
		$("#content-menu").removeClass("show");
		$(".menu-icon").removeClass("active");
		$("ul.parent-menu > li").find(".is-active").removeClass("is-active");
		$("ul.parent-menu > li").children().removeClass("sub-active");
	});

	$(".menu-icon").click(function(){
		$(this).toggleClass("active");
		$("#content-menu").toggleClass("show");
	});

	$("ul.parent-menu > li").each(function(){
		if($(this).find(".sub-menu").length == 0) {
			$("ul.parent-menu li a").click(function(){
				$("#content-menu").removeClass("show");
				$(".menu-icon").removeClass("active");
				$("ul.parent-menu > li > .on-menu > a ").removeClass("is-active");
				$("ul.parent-menu > li").children().removeClass("sub-active");
			});
		}
	});

	$(".on-menu").click(function(){
		$(this).children("a").toggleClass("is-active");
		$(this).next().toggleClass("sub-active");
	});
	
	$(".sub-menu ul li").click(function(){
		$("#content-menu").removeClass("show");
		$(".menu-icon").removeClass("active");
		$("ul.parent-menu > li > .on-menu > a ").removeClass("is-active");
		$("ul.parent-menu > li").find(".sub-active").removeClass("sub-active");
		$(this).parents(".sub-menu").slideToggle();
		setTimeout(function() {
			$(".sub-menu").attr('style', ''); 
		}, 1000);
	});
}
function ChangeFontsize() {
	$(".text-size .text-size__s").click(function(){
		$(this).addClass("active");
		$(".text-size .text-size__m").removeClass("active");
		$("html").css("font-size","62.5%");
	});
	$(".text-size .text-size__m").click(function(){
		$(this).addClass("active");
		$(".text-size .text-size__s").removeClass("active");
		$("html").css("font-size","72%");
	});
}
function SwitchLang() {
	$(".text-translate li").on("click", function(){
		$(".text-translate li").removeClass("active");
		$(this).addClass("active");	
	});
}
