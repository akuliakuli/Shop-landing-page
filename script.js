let sliderItems = document.querySelectorAll(".slider_element_item"),
    sliderParent = document.querySelector(".main_slider"),
    sliderUnderline = document.querySelectorAll(".slider_underline");

function removeActive(){
   sliderItems.forEach(item => {
       item.classList.remove("active");
   })
   sliderUnderline.forEach(item => {
       item.classList.remove("show");
   })
}

function addActive(i = 0){
    sliderItems[i].classList.add("active");
    sliderUnderline[i].classList.add("show");
}

sliderParent.addEventListener("click",(e) =>{
    const target = e.target;
    if(target && target.classList.contains("slider_element_item")){
        sliderItems.forEach((item,i) =>{
            if(target == item){
                removeActive();
                addActive(i);
            }
        })
    }
})


//СЛАЙДЕР КНОПОЧНЫЙ

let slideIndex = 1;
const slides = document.querySelectorAll('.main_customer'),
    prev = document.querySelector('.left'),
    next = document.querySelector('.right');

showSlides(slideIndex);


function showSlides(n) {
    if (n > slides.length) {
        slideIndex = 0;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    slides.forEach((item) => item.classList.remove("num"));
    slides[slideIndex - 1].classList.add("num");
}

function plusSlides (n) {
    showSlides(slideIndex += n);
}

prev.addEventListener('click', function(){
    plusSlides(-1);
});

next.addEventListener('click', function(){
    plusSlides(1);
});

