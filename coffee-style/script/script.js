function Regist() {
    window.location.href = "reg.html";
}
function Menu() {
    window.location.href = "menu.html";
}
function Home() {
    window.location.href = "index.html";
}
function info() {
    window.location.href = "info.html";
}
//Menu_//
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
