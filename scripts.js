let slideIndex = 0;
let horizontal_slides = document.getElementsByClassName("h");
let vertical_slides = document.getElementsByClassName("v");
let dots = document.getElementsByClassName("dot");
  
//if vertical screen (i.e phone) use vertical photos to take up more viewport space
let vertical = window.innerHeight > window.innerWidth;
let slides = vertical ? vertical_slides : horizontal_slides;

if (vertical){
  for (i = 0; i < dots.length; i++){
    dots[i].style.display = "none";
  }
}

showSlides();
//next/prev controls
function plusSlides(n){
  showSlides(slideIndex += n);
}

function currentSlide(n){
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
          
  //if passed a number (dot has been clicked), set slide manually
  if (n != null){
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

  //otherwise, change every 15 seconds 
  else{          
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;

    if (slideIndex > slides.length) {slideIndex = 1}

    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 15000); 
  }
}
