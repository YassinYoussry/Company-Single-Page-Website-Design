// Mobile NavBar
function openNavBar() {
    var n = document.getElementById("nav");
    if (n.style.width === "60vw") {
        n.style.width = "0";
    } else {
        n.style.width = "60vw";
    }
}

function closeNavBar() {
    var n = document.getElementById("nav");
    if (n.style.width === "0") {
        n.style.width = "60vw";
    } else {
        n.style.width = "0";
    }
}

// Hero SlideShow
let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

// Faqs Section
var acc = document.getElementsByClassName("accordion");
var p;

for (p = 0; p < acc.length; p++) {
  acc[p].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}