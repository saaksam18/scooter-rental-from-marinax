$(document).ready(function () {
	/* Loading page*/ 
	AOS.init({
		offset: 200,
		duration: 600,
		easing: 'ease-in-out',
		delay: 100,
	});
	setTimeout(function () {
		$("#wrapper").removeClass("invisible");
		$("#wrapper").addClass("visible");
		$("#wrapper").addClass("page-load");
	}, 4500);
	/* end */

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
		$(this).parents(".sub-menu").toggleClass("invisible");
		setTimeout(function() {
			$(".sub-menu").removeClass('invisible');
		}, 800);
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