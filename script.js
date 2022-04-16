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
addActive(0);

sliderParent.addEventListener("click",(e) =>{
    const target = e.target.closest(".slider_element_item");
    if(target && target.matches(".slider_element_item")){
        sliderItems.forEach((item,i) =>{
            if(target == item){
                removeActive();
                addActive(i);
            }
        })
    }
})
// ARROW SLIDER

let slides = document.querySelectorAll(".main_customer_num"),
    prev = document.querySelector(".left"),
    next = document.querySelector(".right");

    let slideIndex = 1;

    showSlides(slideIndex);

    function showSlides(n) {
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach(item => item.classList.remove("num"));
        slides[slideIndex - 1].classList.add("num")
        
      
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

//FORM 

// INPUT INFO
let form = document.querySelector(".footer_input"),
    formName = document.querySelector(".name"),
    formNum = document.querySelector(".tuck"),
    formExpl = document.querySelector("explain");
//INPUT TEXT


let nameHeader = document.querySelector(".head"),
    numHeader = document.querySelector(".mobile"),
    probHeader = document.querySelector(".problem");

    const postData = async(url,data) => {
    const res = await fetch(url,{
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body:data
    })
    return await res.json()

}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if(nameHeader.value !="" || numHeader.value != "" || probHeader.value != ""){
        const formData = new FormData(form);

        const json = JSON.stringify(Object.fromEntries(formData.entries()));
        postData("http://localhost:3000/requests",json)
        .then((data) => console.log(data))
        .finally(() => {
            form.reset();
        })
    }
  
})

// MODAL WINDOW

let modal = document.querySelector(".main_content_modal"),
    close = document.querySelector(".modal_close"),
    open = document.querySelector(".main_content_item_text_more");


function hideModal(){
    modal.classList.remove("show");
    modal.classList.add("hide");
    document.body.style.overflow = "";
}

function showModal(){
    modal.classList.add("show");
    modal.classList.remove("hide");
    document.body.style.overflow = "hidden";
}

open.addEventListener("click",showModal);
close.addEventListener("click",hideModal);


document.body.addEventListener("keydown",(e) => {
    if(e.code == "Escape" && modal.classList.contains("show")){
        hideModal();
    }
})

modal.addEventListener("click",(e) => {
    if(e.target == modal){
        hideModal();
    }
})