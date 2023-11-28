$('.healthcare_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    initialSlide: 2,
    infinite: false,
    centerMode: true,
    variableWidth: true,
    nextArrow: '.left_arrow1',
    prevArrow: '.right_arrow1',
    responsive: [{
      breakpoint: 1100,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 992,
      settings: {
       slidesToShow: 1,
       slidesToScroll: 1,
  
      }
   },
    {
       breakpoint: 400,
       settings: {
    //     autoplay: true,
    // autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
       }
    }]
  });
  