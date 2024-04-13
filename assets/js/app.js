$('.card-slider').slick({    
    infinite: true,
    dots: true,
    speed: 200,
    prevArrow:".pre-btn",
    nextArrow:".next-btn",
    slidesToShow: 3,
    dots:false,    
    slidesToScroll: 1,
    cssEase: 'linear',          
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,                                
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
       
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
       
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


 // Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2030 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML =  hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

// ----------------------------
const navmenu = document.querySelector(".navmenu");
const sidbar = document.querySelector(".sidbar");


navmenu.addEventListener("click" , ()=>{
  sidbar.classList.toggle("active")
  navmenu.classList.toggle("active")
})


// --------------------------
// var element = document.body;
// function darkmode(){  
//   element.classList.toggle("darkmode");
// }


document.querySelector('#dark-mode-toggle').addEventListener('click', function() {
  document.querySelector('html').toggleAttribute('data-dark-mode')  
})  



