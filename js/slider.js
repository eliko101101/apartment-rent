$('.slider').slick({
    dots: true,
    infinite: false,
    arrows: true,
    slidesToShow: 2,
    responsive: [
      {
        breakpoint: 1334,
        settings: {
          arrows: false,
        }
      },
      {
        breakpoint: 1280,
        settings: {
          dots: false,
          arrows: false,
          autoplay: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          dots: false,
          arrows: false,
          autoplay: true,
        }
      },
    ]
  });

  $('.about-slider--first').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.about-slider--second',
    responsive: [
      {
        breakpoint: 425,
        settings: {
          arrows: false,
          dots:true,
        }
      },
      
    ]
  });
  $('.about-slider--second').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: false,
    asNavFor: '.about-slider--first',
    arrows: true,
    focusOnSelect: true
  });