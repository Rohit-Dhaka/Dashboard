$('.card-slider').slick({    
    infinite: true,
    dots: true,
    speed: 200,
    prevArrow:".pre-btn",
    nextArrow:".next-btn",
    slidesToShow: 3,
    dots:false,
    // autoplay:true,
    slidesToScroll: 1,
    cssEase: 'linear',  
    
    // variableWidth: true,  
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



  function highlightText() {
    const searchInput = document.getElementById('searchInput').value;        
    const contentElement = document.querySelector('.content');   
    if (searchInput !== '') {        
    const highlightedContent = contentElement.innerHTML.replace(
       new RegExp(searchInput, 'gi'),
       '<span class="highlight">$&</span>',
       contentElement.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" }) ,
    );
    contentElement.innerHTML = highlightedContent;                  
   }         
   else{
       alert("enter some text")
    }       
 }