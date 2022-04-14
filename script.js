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


