$('.slider-two').slick({    
    infinite: true,
    dots: true,
    speed: 800,
    slidesToShow: 1,
    autoplay:true,
    slidesToScroll: 1,
    cssEase: 'linear',  
    centerMode: true,  
    variableWidth: true,  
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          cssEase: 'linear'
  
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          cssEase: 'linear'
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          cssEase: 'linear'
        }
      }
    ]
  });