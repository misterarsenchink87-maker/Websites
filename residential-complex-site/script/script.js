let index = 0;
const slides = document.getElementById("slides");
const totalSlides = document.querySelectorAll(".slide").length;
function nextSlide(){
    index++;
    if(index >= totalSlides){
        index = 0;
    }
    updateSlider();
}


function prevSlide(){
    index--;
    if(index < 0){
        index = totalSlides - 1;
    }
    updateSlider();
}

function updateSlider(){
    slides.style.transform = "translateX(" + (-index * 100) + "%)";
}
setInterval(nextSlide,3000);



// 2- slides
let index2 = 0;
const slides2 = document.getElementById("slides2");
const totalSlides2 = document.querySelectorAll(".slide2").length;
function nextSlide2(){
    index2++;
    if(index2 >= totalSlides2){
        index2 = 0;
    }
    updateSlider2();
}


function prevSlide2(){
    index2--;
    if(index2 < 0){
        index2 = totalSlides2 - 1;
    }
    updateSlider2();
}

function updateSlider2(){
    slides2.style.transform = "translateX(" + (-index * 100) + "%)";
}
setInterval(nextSlide2,3000);

function home() {
    window.location.href = "index.html";
}
function about() {
    window.location.href = "about.html";
}
function plan() {
    window.location.href = "plan.html";
}