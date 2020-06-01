$(document).ready(function(){
    $('.pickup-slide').slick({
      centerMode: true,
      centerPadding: '60px',
      slidesToShow: 3,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: true,
      prevArrow:"<img class='a-left control-c prev slick-prev' style='position: absolute;z-index: 2;height: 100%;mix-blend-mode: multiply;' src='assets/images/prev-arrow.svg'>",
      nextArrow:"<img class='a-right control-c next slick-next' style='position: absolute;z-index: 2;right: 0;top: 0;height: 100%;mix-blend-mode: multiply;' src='assets/images/next-arrow.svg'>",
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

    // About us page title animation
    $(window).on("load scroll resize", function(){
      $(".trigger").each(function(){
        var imgPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > imgPos - windowHeight + windowHeight / 4){
          $(this).addClass("is-show");
        }
      });
    });
});