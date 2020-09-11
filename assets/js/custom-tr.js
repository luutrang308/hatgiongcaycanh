/* slider post */
$('.slider-post').slick({
  dots: true,/*
  infinite: true,
  speed: 300,
  autoplaySpeed: 1200,*/
  slidesToShow: 3,/*
  adaptiveHeight: true,
  autoplay: true,*/
});

/* countdown timer */
const second = 1000,
     minute = second * 60,
     hour = minute * 60,
     day = hour * 24;

let countDown = new Date('Sep 30, 2020 00:00:00').getTime(),
    x = setInterval(function() {   
    let now = new Date().getTime(),
    	distance = countDown - now;
    document.getElementById('days').innerText = Math.floor(distance / (day)),
        document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);
}, second);
/* countdown timer */
/* slider homepage */
$('.slider-pc').slick({
  dots: true,/*
  infinite: true,
  speed: 300,
  autoplaySpeed: 1200,*/
  slidesToShow: 1,/*
  adaptiveHeight: true,
  autoplay: true,*/
  prevArrow:"<button class='prev slick-prev'><img class='left-arrow ' src='assets/img/left.png' alt=''></button>",
  nextArrow:"<button class='next slick-next'><img class='right-arrow ' src='assets/img/right.png' alt=''></button>",
});

/* slide product homepage */
$('.slider-product').slick({
  dots: true,/*
  infinite: true,
  speed: 300,
  autoplaySpeed: 1200,*/
  slidesToShow: 4,/*
  adaptiveHeight: true,
  autoplay: true,*/
});

/* slide new product homepage */
$('.slider-new-product').slick({
  dots: true,/*
  infinite: true,
  speed: 300,
  autoplaySpeed: 1200,*/
  slidesToShow: 4,/*
  adaptiveHeight: true,
  autoplay: true,*/
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
  focusOnSelect: true
});

