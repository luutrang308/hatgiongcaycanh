$(document).ready(function(){
  $(".video-for .video-item .title").click(function(){
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
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 1
        }
      },
    ]
  });
  $('.cate-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    fade: true,
    asNavFor: '.cate-nav',
    prevArrow:"<button class='prev slick-prev'><img class='left-arrow ' src='assets/img/left.png' alt=''></button>",
    nextArrow:"<button class='next slick-next'><img class='right-arrow ' src='assets/img/right.png' alt=''></button>",

  });
  $('.cate-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.cate-for',
    margin: '30px',
    dots: true,
    centerMode: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 1
        }
      },
    ]
  });
  $(".humberger-menu").click(function () {
    $(".sub-menu").fadeToggle("slow");
  });
  /* back to top */
  $(window).scroll(function(){
    if ($(this).scrollTop() > 500) {
      $('.backtotop').fadeIn();
    } else {
      $('.backtotop').fadeOut();
    }
  });
  $('.backtotop').click(function(){
    $('html, body').animate({scrollTop : 0},800);
    return false;
  });
  /* back to top */


});





/* slider post */
$('.slider-post').slick({
  dots: true,
  slidesToShow: 3,
  /*autoplay: true,*/
  responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 1
        }
      },
    ]
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
  responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 1
        }
      },
    ]
});

/* slide product homepage */
$('.slider-product').slick({
  dots: true,
  slidesToShow: 4,
  /*autoplay: true,*/
  responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 1
        }
      },
    ]
});
jQuery(document).ready(function($) {
  var $filter = $('.header-mb');
  var $filterSpacer = $('<div />', {
    "class": "vnkings-spacer",
    "height": $filter.outerHeight()
  });
  if ($filter.size())
  {
    $(window).scroll(function ()
    {
      if (!$filter.hasClass('hd-mb') && $(window).scrollTop() > $filter.offset().top)
      {
        $filter.before($filterSpacer);
        $filter.addClass("hd-mb");
      }
      else if ($filter.hasClass('hd-mb')  && $(window).scrollTop() < $filterSpacer.offset().top)
      {
        $filter.removeClass("hd-mb");
        $filterSpacer.remove();
      }
    });
  }
});
jQuery(document).ready(function($) {
  var $filter = $('.header-pc');
  var $filterSpacer = $('<div />', {
    "class": "vnkings-spacer",
    "height": $filter.outerHeight()
  });
  if ($filter.size())
  {
    $(window).scroll(function ()
    {
      if (!$filter.hasClass('hd-mb') && $(window).scrollTop() > $filter.offset().top)
      {
        $filter.before($filterSpacer);
        $filter.addClass("hd-mb");
      }
      else if ($filter.hasClass('hd-mb')  && $(window).scrollTop() < $filterSpacer.offset().top)
      {
        $filter.removeClass("hd-mb");
        $filterSpacer.remove();
      }
    });
  }
});

