$('#portfolio__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows:false,
  });
  

  $('.portfolio__slider--arrow-next').on('click', function() {
    $('#portfolio__slider').slick('slickNext');
  });
  $('.portfolio__slider--arrow-prev').on('click', function() {
    $('#portfolio__slider').slick('slickPrev');
  });