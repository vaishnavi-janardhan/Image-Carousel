
var slideIndex = 1;
showSlides(slideIndex);

var delay = 3000;

// Next/previous controls
function nextSlide(n) {
  clearTimeout(slideShow);
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function changeSlide(n) {
  clearTimeout(slideShow);
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var slides = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("circle");

  var i;
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
  slideShow = setTimeout(function(){ showSlides(++slideIndex); }, delay);
}
