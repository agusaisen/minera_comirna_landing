let currentSlide = 1;
let slideIndex = 1;

function showSlides() {
  if (currentSlide === 1) {
    dot2();
  } else {
    dot1();
  }
  setTimeout(showSlides, 8000);
}


function dot1() {
  if (currentSlide === 2) {
    document.getElementById("slide1").style.transform = 'translateX(0)';
    document.getElementById("slide2").style.transform = 'translateX(0)';
    document.getElementById("dot2").style.fill = "#404040";
    document.getElementById("dot1").style.fill = "#398641";
    currentSlide = 1;
  } else {

  }

}

function dot2() {
  if (currentSlide === 1) {
    document.getElementById("slide1").style.transform = 'translateX(-100%)';
    document.getElementById("slide2").style.transform = 'translateX(-100%)';
    document.getElementById("dot1").style.fill = "#404040";
    document.getElementById("dot2").style.fill = "#398641";
    currentSlide = 2;
  } else {

  }

}
function enableBtnMb(){
  document.getElementById("btn-mb").disabled = false;
}
function enableBtnDsk(){
  document.getElementById("btn-dsk").disabled = false;
}
function check() {
  const searchParams = new URLSearchParams(window.location.search);
  var status = searchParams.get('status');
  if (status == 'ok') {
    alert("Mensaje enviado");
  }
 
  setTimeout(showSlides, 5000);
}
function verMenu() {
  document.getElementById("menumb").style.display = "block";
}
function cerrarMenu() {
  document.getElementById("menumb").style.display = "none";
}
function irA(ubi) {
  var element = document.getElementById(ubi);
  element.scrollIntoView();
  document.getElementById("menumb").style.display = "none";
}
function cerrarSlides() {
  document.getElementById("photos").style.display = "none";
}

let slideIndex2 = 1;
showSlides2(slideIndex2);

function plusSlides2(n) {
  showSlides2(slideIndex2 += n);
}

function currentSlide2(n) {
  showSlides2(slideIndex2 = n);
}

function showSlides2(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) { slideIndex2 = 1 }
  if (n < 1) { slideIndex2 = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex2 - 1].style.display = "block";
}

function verFoto(index) {
  slideIndex2 = index;
  showSlides2(index);
  document.getElementById("photos").style.display = "flex";
}



let slideIndex3 = 1;
showSlides22(slideIndex3);

function plusSlides22(n) {
  showSlides22(slideIndex3 += n);
}

function currentSlide22(n) {
  showSlides22(slideIndex3 = n);
}

function showSlides22(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides2");
  if (n > slides.length) { slideIndex3 = 1 }
  if (n < 1) { slideIndex3 = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex3 - 1].style.display = "block";
}

function verFoto2(index) {
  slideIndex3 = index;
  showSlides22(index);
  document.getElementById("products").style.display = "flex";
}
function cerrarSlides2() {
  document.getElementById("products").style.display = "none";
}

function onSubmitDsk(token) {
  document.getElementById("form-dsk").submit();
}

function onSubmitMb(token) {
  document.getElementById("form-mb").submit();
}