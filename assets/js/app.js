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
// ----------------------------search-text
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
//  -------------------------------countDownDate
var countDownDate = new Date("Jan 10, 2030 15:37:25").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();  
  var distance = countDownDate - now;  
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);      
  document.getElementById("demo").innerHTML =  hours + "h "
  + minutes + "m " + seconds + "s ";      
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
// ----------------------------sidbar
const navmenu = document.querySelector(".navmenu");
const sidbar = document.querySelector(".sidbar");
navmenu.addEventListener("click" , ()=>{
  sidbar.classList.toggle("active")
  navmenu.classList.toggle("active")
})
// ---------------------------------dark-mode




document.querySelector('#dark-mode-toggle').addEventListener('click', function() {
  document.querySelector('html').toggleAttribute('data-dark-mode')  
})  
// -------------------------
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};



function seconddrowp() {
  document.getElementById("myDropdown2").classList.toggle("show2");
}
window.onclick = function (event) {
  if (!event.target.matches('.dropbtn2')) {
    var dropdowns = document.getElementsByClassName("dropdown-content2");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show2')) {
        openDropdown.classList.remove('show2');
      }
    }
  }
};


