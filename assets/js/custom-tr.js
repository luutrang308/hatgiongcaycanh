$(document).ready(function(){
  $(".video-for .video-item .title").hover(function(){
    $(this).css("display", "none");
  });

  $('.video-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    fade: true,
    asNavFor: '.video-item-nav',
    prevArrow:"<button class='prev slick-prev'><img class='left-arrow ' src='assets/img/left.png' alt=''></button>",
    nextArrow:"<button class='next slick-next'><img class='right-arrow ' src='assets/img/right.png' alt=''></button>",

  });
  $('.video-item-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.video-for',
    margin: '30px',
    dots: true,
    centerMode: true,
    focusOnSelect: true,
  });

});
/* slider post */
$('.slider-post').slick({
  dots: true,
  slidesToShow: 3,
  /*autoplay: true,*/
});
$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
  $('.slider-post').slick('setPosition');
});

/* slider homepage */
$('.slider-pc').slick({
  dots: true,
  slidesToShow: 1,
/*  autoplay: true,*/
  prevArrow:"<button class='prev slick-prev'><img class='left-arrow ' src='assets/img/left.png' alt=''></button>",
  nextArrow:"<button class='next slick-next'><img class='right-arrow ' src='assets/img/right.png' alt=''></button>",
});

/* slide product homepage */
$('.slider-product').slick({
  dots: true,
  slidesToShow: 4,
  /*autoplay: true,*/
});

/* slide new product homepage */
$('.slider-new-product').slick({
  dots: true,
  slidesToShow: 4,
  /*autoplay: true,*/
});

/* slide new product */
$('.slider-banner').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  prevArrow:"<button class='prev slick-prev'><img class='left-arrow ' src='assets/img/left1.png' alt=''></button>",
  nextArrow:"<button class='next slick-next'><img class='right-arrow ' src='assets/img/right1.png' alt=''></button>",
  asNavFor: '.slider-new-product',
});
$('.slider-new-product').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '.slider-banner',
  dots: true,
  centerMode: true,
  focusOnSelect: true,
});

